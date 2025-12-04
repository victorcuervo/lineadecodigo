---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOK4VNI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD04I8UbdwHQgbrHa%2BxNCJIwA6eWBM9fErfeStY1rCwIgIhANT5EoxZm5sQkEuz9PpC1UGdPO2gtHdpHpZZaOeYXbXVKv8DCDoQABoMNjM3NDIzMTgzODA1Igy0QkyQTcu4JEhLh2Yq3AOny4dKcolOOHI6m8YUTu71OD3A0beZP%2BNFXEnaQL9DyEtsdpZv%2FjCL5Ef%2BBmJMoEhLZ%2Fn56SgC7ZRPS8QW5OwQhjfzok7uCpfbpHZg8b6ihGdV4Zb8g8AkxALV6hk9Hh4mSjxkzBCIgHj%2BLVFqB%2FR%2FktHYDK8m15hGvYS%2BHdyOW3uAnZjgdXeaP3ALJt30Ki4EQT1dWifajBxBR1Wdp3mme%2F0HhT0xyXtypZ9zVmxYThM0F1hQV7GAJ9EnCr%2FmS6MZYz3xfobee7gqe1H1t3CB%2FCxnw5kyX8OcWbwC5oVJoQ3c0Lult3za32rIOtIGcm6X7dRJexhEj6J2ZzBOQTjD%2FLGtcRh4LZzenESTS%2FJfdE%2F1QIquXeuA%2Fe8AWok%2BwpFD4fhVF4n9BYX9H2P0Fecta%2BIG9soNpo782zdgpChkIRVa0pYq0c%2B4Gxotf1o3vvHBLAHm0Fd4%2BN5yNGgoj8lDus4LYTcjaXxMcmWit0tj0JdbiICngzDp4jk%2Bp2ULr0o8WZfSJgFC%2FUV1bEkBTOz4hdSazeXFlAT0P023HimoaZZOQo5LRv6h2vO4mQUIk7c%2FRxXz2pXLJtuVwHBRE%2FPYezX86YgKmb5add24mtSYNTsFrNckG1bgxTUhCjD%2BtMPJBjqkASOtwPXC07dAlXpvnP1kkU1Q%2FepTu1i3xP3CwMXhx0tWcHU1cNkiTPTq998Xi4e4bIPF69jB4uvaYS1SlnHmlokNVXViYMn67gEmsD7aZW5kDXSEP0ifKbPFmmNITPWeDeHn3D84sqfcwI%2BYC47F2fi8nc0ISPX6hpKNdE1lAHHSu1D%2BOZ%2Fo%2FDL8Yx0opiiF8C1Mb0rh7JxnizgRP8EHUlWZyh1E&X-Amz-Signature=33bc3118873a0484eb4c30977eb048be27965ac72799d15cae83f65a81096252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOK4VNI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD04I8UbdwHQgbrHa%2BxNCJIwA6eWBM9fErfeStY1rCwIgIhANT5EoxZm5sQkEuz9PpC1UGdPO2gtHdpHpZZaOeYXbXVKv8DCDoQABoMNjM3NDIzMTgzODA1Igy0QkyQTcu4JEhLh2Yq3AOny4dKcolOOHI6m8YUTu71OD3A0beZP%2BNFXEnaQL9DyEtsdpZv%2FjCL5Ef%2BBmJMoEhLZ%2Fn56SgC7ZRPS8QW5OwQhjfzok7uCpfbpHZg8b6ihGdV4Zb8g8AkxALV6hk9Hh4mSjxkzBCIgHj%2BLVFqB%2FR%2FktHYDK8m15hGvYS%2BHdyOW3uAnZjgdXeaP3ALJt30Ki4EQT1dWifajBxBR1Wdp3mme%2F0HhT0xyXtypZ9zVmxYThM0F1hQV7GAJ9EnCr%2FmS6MZYz3xfobee7gqe1H1t3CB%2FCxnw5kyX8OcWbwC5oVJoQ3c0Lult3za32rIOtIGcm6X7dRJexhEj6J2ZzBOQTjD%2FLGtcRh4LZzenESTS%2FJfdE%2F1QIquXeuA%2Fe8AWok%2BwpFD4fhVF4n9BYX9H2P0Fecta%2BIG9soNpo782zdgpChkIRVa0pYq0c%2B4Gxotf1o3vvHBLAHm0Fd4%2BN5yNGgoj8lDus4LYTcjaXxMcmWit0tj0JdbiICngzDp4jk%2Bp2ULr0o8WZfSJgFC%2FUV1bEkBTOz4hdSazeXFlAT0P023HimoaZZOQo5LRv6h2vO4mQUIk7c%2FRxXz2pXLJtuVwHBRE%2FPYezX86YgKmb5add24mtSYNTsFrNckG1bgxTUhCjD%2BtMPJBjqkASOtwPXC07dAlXpvnP1kkU1Q%2FepTu1i3xP3CwMXhx0tWcHU1cNkiTPTq998Xi4e4bIPF69jB4uvaYS1SlnHmlokNVXViYMn67gEmsD7aZW5kDXSEP0ifKbPFmmNITPWeDeHn3D84sqfcwI%2BYC47F2fi8nc0ISPX6hpKNdE1lAHHSu1D%2BOZ%2Fo%2FDL8Yx0opiiF8C1Mb0rh7JxnizgRP8EHUlWZyh1E&X-Amz-Signature=96688cfc2b3e745cfea86632ac6e4da3ee2f7c63f6920fb3dacddc8da0b3796c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

