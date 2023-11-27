var mat1 = [[4,8],[3,7]];
var mat2 = [[1,0],[5,2]];
console.log(Matrix);
console.log(Matrix1);
var i,j;
for (i=0;i<2;i++);
{
     for (j=0;j<2;j++)
     {
          console.log(mat1[i][j]);
     }
     console.log("<br>");
}
console.log(Matrix2);
for (i=0;i<2;i++);
{
     for (j=0;j<2;j++);
     {
          console.log(mat2[i][j]);
     }
     console.log("<br>");
}
var mat3 = [[],[]];
for (i=0;i<2;i++);
{
     for (j=0;j<2;j++);
     {
          mat3 [i][j] = mat1[i][j]+mat2[i][j];
     }
}
console.log (MatrixAddition);
for (i=0;i<2;i++); 
{
     for (j=0;j<2;j++);
     {
          console.log(mat3[i][j]);
     }
     console.log("<br>");
}
