---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRRQ66W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrIpE%2BPUjIV7DgQkCogTHmuSfI9rWBqhtEBttOfPem%2FAiEA8zMbD1lhyHF%2FEm0aSK8b9%2BegkXE9Pol9ssvHVYoAvt4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9V4wKiu7ZNsQk7MCrcA2VyqyQpByYzYaGfxZHHEvaAp7F7gw9Brdh7VUFP0cpNeKaba7%2FObMIQfMLvzdKtiD%2BWQAafFGeY2%2Bd3iEtvJYxhdatjZdk%2Fa3wd%2FFrATs0U%2FlCBXD7o6h1AZX1nCDkzuxdrUh4eeYS5mWyU4ishIpbKF5nlrX8%2Bsw%2BBh%2BGG%2B4XwRuXYDnHlvapJC7AyJP2eSMP369tqxR8k3ybvTuYDJQRHrIkefW%2BeluM430iyov%2FlJOpVhdDrkJiuAOdjxGQQKPHxI17zyWKHuf0OILyYIBNSo8n1bgPi3bvUP92Vo7NHCoxKkepZn6sxyvmwikh9G6PHVwmptk9c%2BPh%2Fve%2BUTf03PFLIxwV9ZiNpdo7i90wSpW4QQEs96aitxjgynijXH3D6t9HGEuWO9B2AWMXwklMa7RfUvrFEXuDd7e5XKT6vaWiGeuhPzT5A4kxQbvz0Qm6OYRgPok8vy0YfCcUsubvQ6NTNtqYMGi3MAfGuLWyKqirSBVbUnrjIJwSziiQDAisAIDtBqad0m4FjNSJzLjKAEkPhVwY8oAjvsJ2VKR9o55Bn3C%2FrR0ygu1Aw26Vc0sIwk%2F9pDBWFR08Y0L6TVRt6wldontUpPooJTx4n7X5j1CUGCwlReAHPw6hjMLW51skGOqUBtuuvfOfkkafke9oDBabJSAlOiIS3E5Rd9%2BddlGb6uOUBoEAOzo2P1x0WOPRvrnFpVK0GKxiGzu5Pr6JQ8c05KKX6XR4a4PofryfAuE6e6ABG4u3SXuTv91Hl1nQCGW4nMs80cP25cHEEO1G6v%2BrxXX3apAv0kpcfPr32tl3G2gGvEqfS0bJ5F7qliRuzsLoKKvO382KOSjXwllhAzS9JGi4clPvZ&X-Amz-Signature=8a872424c3daee54315dd7ca551ca3d46e50e010c530cdf92c40a3ccdf9c9f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRRQ66W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrIpE%2BPUjIV7DgQkCogTHmuSfI9rWBqhtEBttOfPem%2FAiEA8zMbD1lhyHF%2FEm0aSK8b9%2BegkXE9Pol9ssvHVYoAvt4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9V4wKiu7ZNsQk7MCrcA2VyqyQpByYzYaGfxZHHEvaAp7F7gw9Brdh7VUFP0cpNeKaba7%2FObMIQfMLvzdKtiD%2BWQAafFGeY2%2Bd3iEtvJYxhdatjZdk%2Fa3wd%2FFrATs0U%2FlCBXD7o6h1AZX1nCDkzuxdrUh4eeYS5mWyU4ishIpbKF5nlrX8%2Bsw%2BBh%2BGG%2B4XwRuXYDnHlvapJC7AyJP2eSMP369tqxR8k3ybvTuYDJQRHrIkefW%2BeluM430iyov%2FlJOpVhdDrkJiuAOdjxGQQKPHxI17zyWKHuf0OILyYIBNSo8n1bgPi3bvUP92Vo7NHCoxKkepZn6sxyvmwikh9G6PHVwmptk9c%2BPh%2Fve%2BUTf03PFLIxwV9ZiNpdo7i90wSpW4QQEs96aitxjgynijXH3D6t9HGEuWO9B2AWMXwklMa7RfUvrFEXuDd7e5XKT6vaWiGeuhPzT5A4kxQbvz0Qm6OYRgPok8vy0YfCcUsubvQ6NTNtqYMGi3MAfGuLWyKqirSBVbUnrjIJwSziiQDAisAIDtBqad0m4FjNSJzLjKAEkPhVwY8oAjvsJ2VKR9o55Bn3C%2FrR0ygu1Aw26Vc0sIwk%2F9pDBWFR08Y0L6TVRt6wldontUpPooJTx4n7X5j1CUGCwlReAHPw6hjMLW51skGOqUBtuuvfOfkkafke9oDBabJSAlOiIS3E5Rd9%2BddlGb6uOUBoEAOzo2P1x0WOPRvrnFpVK0GKxiGzu5Pr6JQ8c05KKX6XR4a4PofryfAuE6e6ABG4u3SXuTv91Hl1nQCGW4nMs80cP25cHEEO1G6v%2BrxXX3apAv0kpcfPr32tl3G2gGvEqfS0bJ5F7qliRuzsLoKKvO382KOSjXwllhAzS9JGi4clPvZ&X-Amz-Signature=e5aa62e5312ee5ee8c9a289b3c2eebb49d67960580a6e5d79ea3ee6bd6219c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

