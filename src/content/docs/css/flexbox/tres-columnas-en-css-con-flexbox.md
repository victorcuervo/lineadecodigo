---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3JCN4QQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDak4LdKQHJOfJcGOOwx1EKAqNMbXi3sRvOnvYKU4e8BwIhAJOqcTJ%2F7wH9qWIosOsTfzWMzoUS7LnudnSOQ2XTjFKPKv8DCFoQABoMNjM3NDIzMTgzODA1IgxBimqpzeHq3OU%2FXVEq3ANGFwRtK1GKewLeOPU5rCDa6Gz%2Fa7rK6hzYVjl%2BId1qNV2wpw7dxKOoRF82H0cPZQX2WhduelGNWefGGGeoNFXXpjyd3gMX1QKnn2FEgaEj1aHhCBJZZE0Xl0a5sANHz%2Bjozw3bAoW3cTp%2F0TU1UogZ1o1TXlo3FspdwxxjV6xwQAxpPPsdSCYjCQ5afRnxqlY8lpPZSR%2BeSEh8c0%2F9r5grDBdSul%2BqiWuyigN4aDlxHQKAS5By2sxd6Kbw8%2BTQbBaTJuHa0bbuEIEwn86X7IGa%2FmvMooMcYFP9GhHFOgFPUvdrFwuNyKi7YoqB3k%2B9ZUaDILJ%2Bh24f9fjH6NWBrGR96inIr2XjO1hZA6TskZa0Dc6igh7w3akb93btWmbmvhQlLHUt85SAkE5BwugdPLQQN4MTCCJh%2BCA3BhIbeXNeLtCAAW8eCKaXL3VGT6U6sMXXoNtg5pMJ23ziw4GgsWUuv5U6KFRcvtBfFXJPVo81%2F2pMlISxA5Hb3Cqgbzrpnc4tZ74xR5GbbEaNUTeQE5Mg892k%2BkSklOyLQbfWqazTJI069pbpnZ1LeXWEKTyc%2BmsCQP8GlVY395qajTYlUCs%2Ftgn0dky3DqUf288O2GivPb6cSblHgVy1i6%2BGBTDpxsrJBjqkATBuLgRhyDdm7HkbpvLyVSUeZIgsVUUn%2BSXl6fiFKqGzBVDWO%2FweOaOnochb8as%2B80RXmJP3UaXEub4s1JKwpo2ZDdXalqeE94uU8%2Bg7kGAB5nxrxILmuQ4ef0nGt10RvnhaE58UrIgDJnMI4Ot25YsPgStvleZvAbO1Ei7OZFhwbaoBAu233JxSAXDjGP44IzvYjnjjLZIvFuKw60Ypr3CSJB5p&X-Amz-Signature=85f912cf99aa21e02c50edc6d2d7ed35a8572e727f641b74a2fe91d94392969a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3JCN4QQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDak4LdKQHJOfJcGOOwx1EKAqNMbXi3sRvOnvYKU4e8BwIhAJOqcTJ%2F7wH9qWIosOsTfzWMzoUS7LnudnSOQ2XTjFKPKv8DCFoQABoMNjM3NDIzMTgzODA1IgxBimqpzeHq3OU%2FXVEq3ANGFwRtK1GKewLeOPU5rCDa6Gz%2Fa7rK6hzYVjl%2BId1qNV2wpw7dxKOoRF82H0cPZQX2WhduelGNWefGGGeoNFXXpjyd3gMX1QKnn2FEgaEj1aHhCBJZZE0Xl0a5sANHz%2Bjozw3bAoW3cTp%2F0TU1UogZ1o1TXlo3FspdwxxjV6xwQAxpPPsdSCYjCQ5afRnxqlY8lpPZSR%2BeSEh8c0%2F9r5grDBdSul%2BqiWuyigN4aDlxHQKAS5By2sxd6Kbw8%2BTQbBaTJuHa0bbuEIEwn86X7IGa%2FmvMooMcYFP9GhHFOgFPUvdrFwuNyKi7YoqB3k%2B9ZUaDILJ%2Bh24f9fjH6NWBrGR96inIr2XjO1hZA6TskZa0Dc6igh7w3akb93btWmbmvhQlLHUt85SAkE5BwugdPLQQN4MTCCJh%2BCA3BhIbeXNeLtCAAW8eCKaXL3VGT6U6sMXXoNtg5pMJ23ziw4GgsWUuv5U6KFRcvtBfFXJPVo81%2F2pMlISxA5Hb3Cqgbzrpnc4tZ74xR5GbbEaNUTeQE5Mg892k%2BkSklOyLQbfWqazTJI069pbpnZ1LeXWEKTyc%2BmsCQP8GlVY395qajTYlUCs%2Ftgn0dky3DqUf288O2GivPb6cSblHgVy1i6%2BGBTDpxsrJBjqkATBuLgRhyDdm7HkbpvLyVSUeZIgsVUUn%2BSXl6fiFKqGzBVDWO%2FweOaOnochb8as%2B80RXmJP3UaXEub4s1JKwpo2ZDdXalqeE94uU8%2Bg7kGAB5nxrxILmuQ4ef0nGt10RvnhaE58UrIgDJnMI4Ot25YsPgStvleZvAbO1Ei7OZFhwbaoBAu233JxSAXDjGP44IzvYjnjjLZIvFuKw60Ypr3CSJB5p&X-Amz-Signature=99b38485ba3c09d0b07f603b48662203da2126c33c2429ec02f66ecba7025bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

