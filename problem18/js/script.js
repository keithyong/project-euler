var textInput;
var line;
var triangle;
var done = false;
var MAXINT = 9007199254740992;
var MININT = -9007199254740992;
function main(){
    var start = new Date().getTime();

    var reader = new FileReader();
    textInput = document.getElementById("input").value;
    document.getElementById("output").innerHTML = "";

    triangle = parse(textInput);

    var triangleAdjMat = makeAdjMatTriangle(triangle);
    var vertexWeights = makeWeightArray(triangle);
    var dist = maxDijkstra(triangleAdjMat, vertexWeights, 0);
    var maxIndex = findIndexWithMax(dist);
    document.getElementById("output").innerHTML += "Found max path! It is " + dist[maxIndex];
    elapsed = new Date().getTime() - start;
    document.getElementById("runningTime").innerHTML = "Running time <br />" + elapsed + " millisecond(s)";
} 

function write2DArray(arr){
    var html = '';
    for (var i = 0; i < arr.length; i++)
         html += arr[i] + "<br />";
    document.getElementById("output").innerHTML += html;
}

function writeArray(arr){
    var html = '';
    for (var i = 0; i < arr.length; i++)
        html += arr[i] + ",";
    html += "<br />";
    document.getElementById("output").innerHTML += html;
}

function findIndexWithMax(arr){
    var max = MININT;
    var index = -1;
    for (var i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
            index = i;
        }
    }
    return index;
}

function parse(input){
    var inputArray = input.split("\n"); 
    var temp2D = [];

    for (var i = 0; i < inputArray.length; i++){
        temp2D.push(inputArray[i].split(" ").map(Number));
    }

    return temp2D;
}

function getNumNodes(array) {
    var count = 0;

    for (var r = 0; r < array.length; r++){
        for (var c = 0; c < array[r].length; c++){
            count++;
        }
    }

    return count;
}

function getLeftChildIndex(nodeIndex, rowLen){
    var firstIndexOfRow = ((rowLen - 1) * rowLen) / 2;
    return ((rowLen * (rowLen + 1)) / 2) + (nodeIndex - firstIndexOfRow);
}

function getRightChildIndex(nodeIndex, rowLen){
    var firstIndexOfRow = ((rowLen - 1) * rowLen) / 2;
    return ((rowLen * (rowLen + 1)) / 2) + (nodeIndex - firstIndexOfRow) + 1;
}

// Converts a 2D array representation of a numbered triangle into a weighted adjacency matrix.
function makeAdjMatTriangle(tri2DArray) {
    var rows = tri2DArray.length;
    var columns = tri2DArray[rows - 1].length;
    var numNodes = getNumNodes(tri2DArray);
    var adjmat = new Array(numNodes);
    var r, c;

    for (r = 0; r < numNodes; r++){
        adjmat[r] = new Array(numNodes);
        for (c = 0; c < numNodes; c++)
            adjmat[r][c] = 0;
    }

    var rowLength = 0;
    var firstVertexOfRow, currVertex, leftChild, rightChild;
    for (r = 0; r < (tri2DArray.length - 1); r++){
        rowLength++;
        firstVertexOfRow = ((rowLength - 1) * rowLength) / 2;
        console.log("firstVertexOfRow = " + firstVertexOfRow);
        for (c = 0; c < rowLength; c++){
            currVertex = firstVertexOfRow + c;
            currVertexWeight = tri2DArray[r][c];
            leftChild = getLeftChildIndex(currVertex, rowLength);
            rightChild = getRightChildIndex(currVertex, rowLength);
            adjmat[currVertex][leftChild] = currVertexWeight;
            adjmat[currVertex][rightChild] = currVertexWeight;
            console.log("left,right child = " + leftChild + ", " + rightChild + " | currVertex = " + currVertex);
        }
    }
    return adjmat;
}

// Given a 2D array of the triangle, returns a vertex weight array
function makeWeightArray(tri2DArr){
    var vertexWeights = new Array(getNumNodes(tri2DArr));;
    var count = 0;
    for(var i = 0; i < tri2DArr.length; i++){
        for (var j = 0; j < tri2DArr[i].length; j++){
            vertexWeights[count] = tri2DArr[i][j];
            count++;
        }
    }
    return vertexWeights;
}

// From the set of vertices not in the tree and not infinite, find the vertex with the
// biggest distance
function maxDistance(dist, intree)
{
    var max = 0;
    var maxV = -1;

    // For all vertices, if v is not in the dijkstra MST
    // and max distance sofar is less than or equal to dist[v]
    for (var v = 0; v < dist.length; v++){
        if (intree[v] === false && max <= dist[v]){
            max = dist[v];
            maxV = v; 
        }
    }
    return maxV;
}
// Maximal dijkstra may not work if there is a cycle, but since we don't have cycles then that's fine
function maxDijkstra(adjmat, weight, start) {
    var nvertices = adjmat.length;
    var intree = new Array(nvertices);
    var distance = new Array(nvertices);
    var v;

    for(var i = 0; i < nvertices; i++){
        intree[i] = false;
        distance[i] = MININT;
    }

    distance[start] = weight[start];
    var u;  // Candidate vertex
    for(var c = 0; c <= nvertices; c++){
        u = maxDistance(distance, intree);
        console.log("u = " + u);
        intree[u] = true;

        writeArray(distance);
        for (var v = 0; v < nvertices; v++){
            //If
            //1. vertex v is not in the SP tree yet
            //2. there is an edge between u and v
            //3. distance of u is not MININT
            //4. distance of v is less than the distance of u + weight of edge uv
            if (!intree[v] && 
                adjmat[u][v] && 
                distance[u] != MININT && 
                distance[v] < distance[u] + weight[v]){
                // Here we are using vertex weight instead of edge weight
                distance[v] = distance[u] + weight[v];
            }
        }
    }

    return distance;
}

// ----- TESTS ------
var testArray = [
            [59], 
          [73, 41],
        [52, 40, 09]
];

QUnit.test('parse()', function( assert ){
    assert.deepEqual(parse("59\n73 41\n52 40 09"), testArray, "Parse worked for the first three lines of Euler 67's triangle.txt");
});

QUnit.test('getNumNodes()', function( assert ){
    var test1 = [[1], [2], [3], [4], [5], [6], [7], [8, 9, 10, 11, 12], [13, 14, 15]];
    assert.equal(getNumNodes(testArray), 6, "getNumNodes is correct for the first three lines of Euler 67's triangle.txt");
    assert.equal(getNumNodes(test1), 15, "getNumNodes is correct for test1 array");
});

QUnit.test('makeAdjMatTriangle()', function( assert ){
    /*  Adjacency List   
           59  73  41  52  40  09
        59  0  59  59   0   0   0
        73  0   0   0  73  73   0
        41  0   0   0   0  41  41
        52  0   0   0   0   0   0
        40  0   0   0   0   0   0
        09  0   0   0   0   0   0
    */
    var correct = 
    [
        [0, 59, 59,  0,  0,  0],
        [0,  0,  0, 73, 73,  0],
        [0,  0,  0,  0, 41, 41],
        [0,  0,  0,  0,  0,  0], 
        [0,  0,  0,  0,  0,  0], 
        [0,  0,  0,  0,  0,  0] 
    ];
    assert.deepEqual(makeAdjMatTriangle(testArray), correct, "makeAdjMatTriangle correctly makes an adjancency matrix for weighted digraph");
});

QUnit.test('getRightChildIndex()', function( assert ){
    assert.equal(getRightChildIndex(0, 1), 2);
    assert.equal(getRightChildIndex(10, 5), 16);
    assert.equal(getRightChildIndex(21, 7), 29);
});

QUnit.test('getLeftChildIndex()', function( assert ){
    assert.equal(getLeftChildIndex(0, 1), 1);
    assert.equal(getLeftChildIndex(10, 5), 15);
    assert.equal(getLeftChildIndex(21, 7), 28);
});

QUnit.test('makeWeightArray()', function( assert ){
    var correctWeightArray = [59, 73, 41, 52, 40, 9];
    assert.deepEqual(makeWeightArray(testArray), correctWeightArray);
});

QUnit.test('findIndexWithMax()', function( assert ){
    var test = [2, 3, 4, 5, 3, 5, 2, 9001, 2, 4];
    var test2 = [9000, 9000, 9000, 9000, 9001, 9000, 9000];
    assert.equal(findIndexWithMax(test), 7);
    assert.equal(findIndexWithMax(test2), 4);
});
