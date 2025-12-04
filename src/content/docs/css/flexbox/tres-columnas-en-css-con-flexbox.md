---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RAPDOZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE24TODzKeosUKGrRWmrbsoKpWWj1pWc0kvYTKooclkHAiEAj2J%2BTnnr3lKkaT0RqLzQhfEzBcvoWIA9%2BX%2BCYfBEV7kq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCnfucCHNJmPY4YzKCrcAwvPnBwYM%2BNBLfTkkuNMEXjsY1g1zp9M7CmEROuYBbyczW9jsMcYoUP0jCSlB8dwT8iUKB5mQoKbhsUpdd0tolxOOH5Vsa%2BQ6ObzkTiIuSIpcb540Co1LcC3zINaNcJdwy3pwWoW%2FqatiPARVMUU1bs29cbCh07kIb3SCmc5JHLoDUoxZvRYDBwZmp5QsQMpplFu0JY0B0mqNynLfkrY1HgHlqGjB9s4eStKWgBujr1ZfbuHjMEclLnSQvPN5cpWvktKAWrgt14p9p2pliqt2NjBi3AOBEz4puA23qbgh15DzUW5J6FEQlWXJos8CPWbC%2B4LPSU%2BheE%2Bl4M5D41%2FM8jyckOrfphisPxV5Eo5rMG36tM7WywE5QsGCB3N1DT7t6cbrTyrTTsnUptHZ%2BZ3%2BbPJd4mNglsf0Egb4QVRZ66nw4aXUVO1fS%2F0TgpH0dStjy1LMWGb%2B6EwJYOCsYiLZFDb89IF5K6qCa7GGV%2FeB%2Fxvadr2mKUoegOru4UJ3yt3O4RkHg8nX7s6jeFv%2Bv45znpMQaIzhoC7KKMCQe%2BwOhHK8b3u1N7ct2EfScROJFmvy3WE05%2BZdV9VyzYH3o8MfpFrnGUqsZwpH8b5vTrrwHjDt320nPCnd8SZjoXwMLP5xskGOqUB5uISl6GkpJEWJ3HjDWeoeZYEpwRRorwTmsEYstgaat7Uid3uqrjGfuwrhi6r5IpnvrxACnFR6arxEGhfa1%2BDK3WZE7Rvk80yajMJDXePBmVSs3PrhpYCLUVSVnaRbcSOyD9Sttmzq%2BJ9HfF2pX7rtAuU3uJPw98l%2FD9FQAF0ocZHEK0uhY1PS268B0oAn24HY0CfiMEUx6%2Bh%2Fv8%2BvhT66eyBZYjz&X-Amz-Signature=885b71c4d42c39a7c41b2c4972775c17755d9e47d77ffe385947a24191364610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RAPDOZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE24TODzKeosUKGrRWmrbsoKpWWj1pWc0kvYTKooclkHAiEAj2J%2BTnnr3lKkaT0RqLzQhfEzBcvoWIA9%2BX%2BCYfBEV7kq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCnfucCHNJmPY4YzKCrcAwvPnBwYM%2BNBLfTkkuNMEXjsY1g1zp9M7CmEROuYBbyczW9jsMcYoUP0jCSlB8dwT8iUKB5mQoKbhsUpdd0tolxOOH5Vsa%2BQ6ObzkTiIuSIpcb540Co1LcC3zINaNcJdwy3pwWoW%2FqatiPARVMUU1bs29cbCh07kIb3SCmc5JHLoDUoxZvRYDBwZmp5QsQMpplFu0JY0B0mqNynLfkrY1HgHlqGjB9s4eStKWgBujr1ZfbuHjMEclLnSQvPN5cpWvktKAWrgt14p9p2pliqt2NjBi3AOBEz4puA23qbgh15DzUW5J6FEQlWXJos8CPWbC%2B4LPSU%2BheE%2Bl4M5D41%2FM8jyckOrfphisPxV5Eo5rMG36tM7WywE5QsGCB3N1DT7t6cbrTyrTTsnUptHZ%2BZ3%2BbPJd4mNglsf0Egb4QVRZ66nw4aXUVO1fS%2F0TgpH0dStjy1LMWGb%2B6EwJYOCsYiLZFDb89IF5K6qCa7GGV%2FeB%2Fxvadr2mKUoegOru4UJ3yt3O4RkHg8nX7s6jeFv%2Bv45znpMQaIzhoC7KKMCQe%2BwOhHK8b3u1N7ct2EfScROJFmvy3WE05%2BZdV9VyzYH3o8MfpFrnGUqsZwpH8b5vTrrwHjDt320nPCnd8SZjoXwMLP5xskGOqUB5uISl6GkpJEWJ3HjDWeoeZYEpwRRorwTmsEYstgaat7Uid3uqrjGfuwrhi6r5IpnvrxACnFR6arxEGhfa1%2BDK3WZE7Rvk80yajMJDXePBmVSs3PrhpYCLUVSVnaRbcSOyD9Sttmzq%2BJ9HfF2pX7rtAuU3uJPw98l%2FD9FQAF0ocZHEK0uhY1PS268B0oAn24HY0CfiMEUx6%2Bh%2Fv8%2BvhT66eyBZYjz&X-Amz-Signature=5a03ea449cd9f7118b12811d7d6964cc7e729b2e8d34c92ba9e8a8e3f43d499e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

