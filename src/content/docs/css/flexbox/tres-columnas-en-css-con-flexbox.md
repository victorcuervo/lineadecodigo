---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7OMPAM6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq%2FSdzsztaumCvGKyDU5YAUWXc9Br5olFWISW%2BoFKLcQIhAOJovfA%2FxKtF4usCabFaPI4flZMwGCrxDDPmnw2rqtVSKv8DCFsQABoMNjM3NDIzMTgzODA1IgwLlxghvKe3DzByS6Iq3AOrFeXWwswicHNLuhMDPhhH%2BZpO1UaF78DX3npI61AAAcF5Rdj1CERORi0GYiBhS%2FU4HyymE%2BvB85ctkSj5CAIh5NFTnEz07cHxX9saJJpS6TJ4TPZut94nms9avEHiBZJlSxFEWjwq6kz58uoY%2Bkbxrk2zVaNtqY6tWVZ7GdpnmwWmh2DovK5o2bSJq2%2BztpKJykRjsgi6PEgQlyJJ7m1yx%2BJgnmqdx9jCemKXc8PmZ2xhIIZpFKB3zMHiICIymrjJrjvzOf%2FFU%2FGT7JgmrE3UJR3uewYB7uJ1RKBFLfVH3CShbTsCkcJlhJNkOqILJ1682YHYLj%2Bk6Qz5QRmGiToQmoi72m5SKcCpq1k7VMZw%2FWd0LOw0gbqypvlnucXRrpX2sGRr%2BunRhnEUH%2Fc0U24RjKcEyBL9%2FOXOQbtLvVd0GbWVnZ7gI%2BfvcjS%2Bv3mokdLJCehtFDSn36k2jvx9fnkpRBY7AmGV59Vj7ovBynYWlVF%2FH0bdupyF5mvDd6MRxo8XxPLDMuboUnFZ4f99z54xJG1Y79%2Bb2uuCkyXiE64TAi2iJ4hKAx2%2FxoZUq5Yelomsv56TLfSSyog%2BmJ30qwsAl8y3QEtZrybfrGBLw3Mv91Dsbr2RMy2oZZ9vbTDA1crJBjqkAWCFsUveVpOoNHOpntTsvPdVxeJGC%2FCx5gWj8reNQIyuyIn4uhKFDoPlUOAC9%2BP8hU9R5N6%2BfWN6VvQDMVHOSPqSNwf2HMLJECneZaRxFMoKywp2txq6cr%2Fg54CUhuVjwwD46keggpYfEY7EVeL61Zb0OUMwtwA9NevCLn7l%2Bm9sQfslOLZQtK6u2Iv26FxefQAV1amKnh00fSGskjyjicHtPTiC&X-Amz-Signature=051392337b573e7299dce429626a57b3a524c9c199d7887fc6902fc35959cf64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7OMPAM6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq%2FSdzsztaumCvGKyDU5YAUWXc9Br5olFWISW%2BoFKLcQIhAOJovfA%2FxKtF4usCabFaPI4flZMwGCrxDDPmnw2rqtVSKv8DCFsQABoMNjM3NDIzMTgzODA1IgwLlxghvKe3DzByS6Iq3AOrFeXWwswicHNLuhMDPhhH%2BZpO1UaF78DX3npI61AAAcF5Rdj1CERORi0GYiBhS%2FU4HyymE%2BvB85ctkSj5CAIh5NFTnEz07cHxX9saJJpS6TJ4TPZut94nms9avEHiBZJlSxFEWjwq6kz58uoY%2Bkbxrk2zVaNtqY6tWVZ7GdpnmwWmh2DovK5o2bSJq2%2BztpKJykRjsgi6PEgQlyJJ7m1yx%2BJgnmqdx9jCemKXc8PmZ2xhIIZpFKB3zMHiICIymrjJrjvzOf%2FFU%2FGT7JgmrE3UJR3uewYB7uJ1RKBFLfVH3CShbTsCkcJlhJNkOqILJ1682YHYLj%2Bk6Qz5QRmGiToQmoi72m5SKcCpq1k7VMZw%2FWd0LOw0gbqypvlnucXRrpX2sGRr%2BunRhnEUH%2Fc0U24RjKcEyBL9%2FOXOQbtLvVd0GbWVnZ7gI%2BfvcjS%2Bv3mokdLJCehtFDSn36k2jvx9fnkpRBY7AmGV59Vj7ovBynYWlVF%2FH0bdupyF5mvDd6MRxo8XxPLDMuboUnFZ4f99z54xJG1Y79%2Bb2uuCkyXiE64TAi2iJ4hKAx2%2FxoZUq5Yelomsv56TLfSSyog%2BmJ30qwsAl8y3QEtZrybfrGBLw3Mv91Dsbr2RMy2oZZ9vbTDA1crJBjqkAWCFsUveVpOoNHOpntTsvPdVxeJGC%2FCx5gWj8reNQIyuyIn4uhKFDoPlUOAC9%2BP8hU9R5N6%2BfWN6VvQDMVHOSPqSNwf2HMLJECneZaRxFMoKywp2txq6cr%2Fg54CUhuVjwwD46keggpYfEY7EVeL61Zb0OUMwtwA9NevCLn7l%2Bm9sQfslOLZQtK6u2Iv26FxefQAV1amKnh00fSGskjyjicHtPTiC&X-Amz-Signature=b7e388ea551936b921f245ad1827788de307ee17df4a3f9bc8cb765c00facf5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

