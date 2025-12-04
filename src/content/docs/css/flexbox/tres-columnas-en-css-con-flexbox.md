---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H6YZLEN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFGHZVFbhIbT84KJ9C%2FxdKySAjCsgiHrwRO5GRMRX0luAiEAt3zlOaVOTjH4v%2FuDBXXgNkETW4Km7BP0Zdk6iiljNd4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFDrP0t6hY8a6Wra3CrcA%2BjK20jwbHKXZ%2FM%2BLkPjHQtg2ODmaOw7Rd5vfTZ4zOo1X2g52LmtV3pKQKFrhZPCNpIV13DSsGxbJBKzVLEmLIxJcLVf9Q%2BLhSlm2hZ%2FoJn%2FXM30mlzWpxckbvKzb6IRVsfT%2F05fZjPaQIX1PsvtNVhPhB%2B4%2BQGffgzJChB2m5xO2SedgV4u918444rtOx8PoqwdCLEAEkNHZxOHEBnfQZ%2B6EnYZ17iKTzTFlZlGgn5zFzRcgaJ4Btf%2FOu%2B4uQeiYR5v87PHVnMW9AE%2FFyQ5ckAxN7rMYo4OdrNODIdZYAlGh6aNPAENEtp%2BAmL27prjF8UL%2Be4k039XzITn7Lcrzegach8vzyhrEtPC55MUcPi8JtzZM7vEB6tG4txbx846SzQ9H03yahXNMNAHckE9kqSu3KIXu14YhWqRkBJPzyxLDMhS5iN65GNQXtoiQWgcaw9RoBKvCrhGi%2B%2FB%2F7MJvx9bzLSmNSlnAe545sSbwL9VNfxh7FQH%2FLHcA3w0NxmXSUrYDWRv%2B%2BjotSS%2B1Kq2En3wiTmhznyDohg9JTbXDXO90bcNgatovavcNw%2FaARn%2B8huz7eL4OJ88cuQ5cMDh3OleHQXiHmhqTeBfqQZWaYGOwl5QfVhABT%2FOm9fjMKGsxckGOqUB4%2BbjjauaB2XNQciTwYlZlCtjsL2RPY2gq5G99X91nDXyc4HtzVhr3mnY0HRlgzYGuCr8%2F1Ak6ANLvtvA9RuLw4y57YA4uPujvRVNu0aPkuuOQWWOnUOSAKXyPz7gNA1pWp6xJazWPigYVMyutb%2BvYvqKBVS5ymY6m1eEKxN1y4HYMbCmqEmzkeBXMDWb9wv3mYN%2FS9bgtHlfiV6wqhG50V5Wlpms&X-Amz-Signature=81f5dce805e51e99743bc0daec1ed04b51626a9107f75ebcd94c0f6ffc681662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H6YZLEN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFGHZVFbhIbT84KJ9C%2FxdKySAjCsgiHrwRO5GRMRX0luAiEAt3zlOaVOTjH4v%2FuDBXXgNkETW4Km7BP0Zdk6iiljNd4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFDrP0t6hY8a6Wra3CrcA%2BjK20jwbHKXZ%2FM%2BLkPjHQtg2ODmaOw7Rd5vfTZ4zOo1X2g52LmtV3pKQKFrhZPCNpIV13DSsGxbJBKzVLEmLIxJcLVf9Q%2BLhSlm2hZ%2FoJn%2FXM30mlzWpxckbvKzb6IRVsfT%2F05fZjPaQIX1PsvtNVhPhB%2B4%2BQGffgzJChB2m5xO2SedgV4u918444rtOx8PoqwdCLEAEkNHZxOHEBnfQZ%2B6EnYZ17iKTzTFlZlGgn5zFzRcgaJ4Btf%2FOu%2B4uQeiYR5v87PHVnMW9AE%2FFyQ5ckAxN7rMYo4OdrNODIdZYAlGh6aNPAENEtp%2BAmL27prjF8UL%2Be4k039XzITn7Lcrzegach8vzyhrEtPC55MUcPi8JtzZM7vEB6tG4txbx846SzQ9H03yahXNMNAHckE9kqSu3KIXu14YhWqRkBJPzyxLDMhS5iN65GNQXtoiQWgcaw9RoBKvCrhGi%2B%2FB%2F7MJvx9bzLSmNSlnAe545sSbwL9VNfxh7FQH%2FLHcA3w0NxmXSUrYDWRv%2B%2BjotSS%2B1Kq2En3wiTmhznyDohg9JTbXDXO90bcNgatovavcNw%2FaARn%2B8huz7eL4OJ88cuQ5cMDh3OleHQXiHmhqTeBfqQZWaYGOwl5QfVhABT%2FOm9fjMKGsxckGOqUB4%2BbjjauaB2XNQciTwYlZlCtjsL2RPY2gq5G99X91nDXyc4HtzVhr3mnY0HRlgzYGuCr8%2F1Ak6ANLvtvA9RuLw4y57YA4uPujvRVNu0aPkuuOQWWOnUOSAKXyPz7gNA1pWp6xJazWPigYVMyutb%2BvYvqKBVS5ymY6m1eEKxN1y4HYMbCmqEmzkeBXMDWb9wv3mYN%2FS9bgtHlfiV6wqhG50V5Wlpms&X-Amz-Signature=9d867edb793a0aa28f0ea0278958bc7361e790eb66ff615da21fd8d52ede518a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

