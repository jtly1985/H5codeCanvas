//基本知识
// 1.首先我们需要根据id获得canvas对象，然后通过对象获得'2d'的context,'3d'为canvas保留的字段，并未实现3d的API,当然'webgl'是指WebGl,
// 2.然后我们就可以操作context进行绘制图像
// 3.绘制图形分为两种带fill单词的方法和带stroke，fill是指填充，stroke是指边框
// 4.绘制的坐标系的(0,0)点在网页的左上角，x的正方向水平向右，y的正方形竖直向下。
// 5.画布的宽度和高度。和一幅图像一样，这个属性可以指定为一个整数像素值或者是窗口宽度的百分比。当这个值改变的时候，在该画布上已经完成的任何绘图都会擦除掉。
// 6.画布默认的颜色是白色，context画笔的默认颜色是黑色。
var canvas = document.getElementById('h5canvas');
var context = canvas.getContext('2d');

context.fillRect(0,0,100,100);
context.strokeRect(100,100,50,50);
// canvas.width = 500;
