---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ARIZFA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQChR1dsxCyCCaWdz09aABEcfChA0h8iqfnsEad6oC1iKQIhANCeBeBQk5Ctn3KmxYZc87073v8SeG22d8iiJDGvJDrhKv8DCCoQABoMNjM3NDIzMTgzODA1IgzaQe0HuAv4bjUxYF0q3AOPhrcqiabXn2kVQUS0FMbImotq1WqN4v86Esxa11Kbf9v3gt4P2E5G2m1IvAXCbi0l6eJgeE4Fe7eB24Ow%2Fv8V%2BshTfeKQh0srmTzTfIfA0oxNOUjuSsllffurj6Bl585FyPSVRzg4vQ5Y1sOSxjX2w5Jvc5CoeEuXgqcsuNbO7USKWxZnz1aBU6gTZ6uWTAX36NXnBqcjz%2B5D9v1gDQEXNQZH6mfTyZ5f90ozk4oKU23Dxt%2BtnSORwtdN1EooX82DQLrWkcMqDME31n95Lef3pcd6zL2gw8rcfoHcUQzV9FkfI20jhikQRn70IzP13zESJhp50f7dwNMZ2b4wMZXyIhLGWFuIbtEqbnocfoELWeNFeB0oaZdTQM%2FJ0MDzo5lCDyjLvCyEmC%2FizlET9Ixab%2F8JWUCzUEsTiGLiBn5%2FmV2jutD%2BLChqO7tmN%2FgUodiomZ4iRHumrjp1bB%2F45q89WhKjc4fsxemF%2FrSRUKdV1gU2jr3OAmdyM5sLA3n1qgfWDWw%2BhdfvzsG7wgsZmS194KRQgnAMF3Cxrbd9mDBsaU8dRT2JyxYFy8mamzU5LKQjP%2Fu6YLwZEnbowO2Zfd%2F32H%2BEGQhf9d0%2BpvCCT%2BA36lfb%2FxV2KkYBfO59nTC%2F%2Fr%2FJBjqkAUgEgzZLNyI%2BKWQxRugD2xSvYgfTCmHhCl3ZeUy%2BsRf9VEeAhVFMb%2BtauHHm7L%2FhqkqyYw8nQRztgkPTuXyfaLqbhtplgSCzd5VdSI7T1WREU27n6PvebCB%2By3co1dfTQ17dl1tbTgLa8aJL760z2ai26ubacHbtkBU908dhPgQioAF3T7ZiLTLKS%2FfV%2FBDmQdXxgxbCJ9%2FmapXDwJtnZ5V%2FMoCB&X-Amz-Signature=96a721d6d792f33f757ffb5bd1473685eadba84b0f512e647c5123da332f5d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ARIZFA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQChR1dsxCyCCaWdz09aABEcfChA0h8iqfnsEad6oC1iKQIhANCeBeBQk5Ctn3KmxYZc87073v8SeG22d8iiJDGvJDrhKv8DCCoQABoMNjM3NDIzMTgzODA1IgzaQe0HuAv4bjUxYF0q3AOPhrcqiabXn2kVQUS0FMbImotq1WqN4v86Esxa11Kbf9v3gt4P2E5G2m1IvAXCbi0l6eJgeE4Fe7eB24Ow%2Fv8V%2BshTfeKQh0srmTzTfIfA0oxNOUjuSsllffurj6Bl585FyPSVRzg4vQ5Y1sOSxjX2w5Jvc5CoeEuXgqcsuNbO7USKWxZnz1aBU6gTZ6uWTAX36NXnBqcjz%2B5D9v1gDQEXNQZH6mfTyZ5f90ozk4oKU23Dxt%2BtnSORwtdN1EooX82DQLrWkcMqDME31n95Lef3pcd6zL2gw8rcfoHcUQzV9FkfI20jhikQRn70IzP13zESJhp50f7dwNMZ2b4wMZXyIhLGWFuIbtEqbnocfoELWeNFeB0oaZdTQM%2FJ0MDzo5lCDyjLvCyEmC%2FizlET9Ixab%2F8JWUCzUEsTiGLiBn5%2FmV2jutD%2BLChqO7tmN%2FgUodiomZ4iRHumrjp1bB%2F45q89WhKjc4fsxemF%2FrSRUKdV1gU2jr3OAmdyM5sLA3n1qgfWDWw%2BhdfvzsG7wgsZmS194KRQgnAMF3Cxrbd9mDBsaU8dRT2JyxYFy8mamzU5LKQjP%2Fu6YLwZEnbowO2Zfd%2F32H%2BEGQhf9d0%2BpvCCT%2BA36lfb%2FxV2KkYBfO59nTC%2F%2Fr%2FJBjqkAUgEgzZLNyI%2BKWQxRugD2xSvYgfTCmHhCl3ZeUy%2BsRf9VEeAhVFMb%2BtauHHm7L%2FhqkqyYw8nQRztgkPTuXyfaLqbhtplgSCzd5VdSI7T1WREU27n6PvebCB%2By3co1dfTQ17dl1tbTgLa8aJL760z2ai26ubacHbtkBU908dhPgQioAF3T7ZiLTLKS%2FfV%2FBDmQdXxgxbCJ9%2FmapXDwJtnZ5V%2FMoCB&X-Amz-Signature=0d15a429db2c5ce08108c0ed547a51b9e28952b85da0e69d38d8b50645a1a616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

