---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKMO4JR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbFifW1zMkHw%2Fa2Vi3VNK2cSN%2FtSV%2FE%2BWWXvBKm5vMZAiEAouFWhH1LDHY3cevehqjKFQ7WuLdoSAVroi2A86XifrIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdjfD%2B%2BUewqSAfdJircA41Zanknx6AGuzdWw4ngUEt6EYFj6Twy6lK%2FwU5tlrxF2%2FecRZr4W7q3eYlhZRdoHwSlwIrpTDDny8aWf0VpBORbxC7OJd1uZgpamkgu6rVEzA5Dmzk0CgOuF8iqJ%2FCMB5R2cxfJwO%2BZi5juDhsa%2F62wKEl%2Fm8xhupxlyFAyoTgMAqzF1E1b%2ByzwIed%2FcccoCf%2B3V3M5ZSuOyVTfSydDDN2eAm%2FDwEbbKuikocRsCcTieIoohhW5UDL0Lug%2FX5cbg7kkwApXWJTS6IXRzFZ7EptWJCNo3oYKtbY8r1PjPF%2FmS8a0eVq2aaRLVfHw3JBLniS8b74bMOWLzbaUa7QYgzmbt3729w0NeZ7oMyLCpHnjzPEaTOqgtJ2plO401ANIuGiTEaHtN9b%2BI891PhD%2BL5B8DJtre4KMKi73mfZ35ewVX4oXuKXru6Z3OLLu8%2BVbiORO3hDjKpMuQq7CefQv9KdO9wxoB6E9gjbPU07j5D1a%2Fq%2Fp4jXc8PftxUIknJ0d%2Bud12ke%2BREWaX5ZGI6QO%2FgaAKw4p0Knu2JfCskB69qbkA%2BlVe5JapOt6UW8et%2Byiqyl08Hyo042Q2xp1GFDD4R2mHSB67Ql3OOgNOoijwVj5o5svO1zZjrIl3w5%2BMILt2ckGOqUB979HaO4Zzxkm8UiB3x06CI6f4feoipOFxRyXs%2Fh04EfEgQu1DcpN62KsqO7K699g2fmvsm6GZp0qgGwaXkEoXYN1oFFWcEobIdqkuSPfdBQ1rxaYpOlbrS8yttzNQ0QqR7rpll1NetRZxpynmPS5Aro%2F8dis7%2F7geFQSEwa5VyTT%2FXedtd1fRfp4h6WXNnZfcpjbTf0HD%2FYhtDDgp5gVh2nmkO2v&X-Amz-Signature=eea32b5bb24ee55941882d8109aa34267ee489fcde0dd63c64d7f7395546a4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKMO4JR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbFifW1zMkHw%2Fa2Vi3VNK2cSN%2FtSV%2FE%2BWWXvBKm5vMZAiEAouFWhH1LDHY3cevehqjKFQ7WuLdoSAVroi2A86XifrIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdjfD%2B%2BUewqSAfdJircA41Zanknx6AGuzdWw4ngUEt6EYFj6Twy6lK%2FwU5tlrxF2%2FecRZr4W7q3eYlhZRdoHwSlwIrpTDDny8aWf0VpBORbxC7OJd1uZgpamkgu6rVEzA5Dmzk0CgOuF8iqJ%2FCMB5R2cxfJwO%2BZi5juDhsa%2F62wKEl%2Fm8xhupxlyFAyoTgMAqzF1E1b%2ByzwIed%2FcccoCf%2B3V3M5ZSuOyVTfSydDDN2eAm%2FDwEbbKuikocRsCcTieIoohhW5UDL0Lug%2FX5cbg7kkwApXWJTS6IXRzFZ7EptWJCNo3oYKtbY8r1PjPF%2FmS8a0eVq2aaRLVfHw3JBLniS8b74bMOWLzbaUa7QYgzmbt3729w0NeZ7oMyLCpHnjzPEaTOqgtJ2plO401ANIuGiTEaHtN9b%2BI891PhD%2BL5B8DJtre4KMKi73mfZ35ewVX4oXuKXru6Z3OLLu8%2BVbiORO3hDjKpMuQq7CefQv9KdO9wxoB6E9gjbPU07j5D1a%2Fq%2Fp4jXc8PftxUIknJ0d%2Bud12ke%2BREWaX5ZGI6QO%2FgaAKw4p0Knu2JfCskB69qbkA%2BlVe5JapOt6UW8et%2Byiqyl08Hyo042Q2xp1GFDD4R2mHSB67Ql3OOgNOoijwVj5o5svO1zZjrIl3w5%2BMILt2ckGOqUB979HaO4Zzxkm8UiB3x06CI6f4feoipOFxRyXs%2Fh04EfEgQu1DcpN62KsqO7K699g2fmvsm6GZp0qgGwaXkEoXYN1oFFWcEobIdqkuSPfdBQ1rxaYpOlbrS8yttzNQ0QqR7rpll1NetRZxpynmPS5Aro%2F8dis7%2F7geFQSEwa5VyTT%2FXedtd1fRfp4h6WXNnZfcpjbTf0HD%2FYhtDDgp5gVh2nmkO2v&X-Amz-Signature=6840ac9dadd396984ace7a84cd1d83f056038679dc0d5ae9dad826d0167ab4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

