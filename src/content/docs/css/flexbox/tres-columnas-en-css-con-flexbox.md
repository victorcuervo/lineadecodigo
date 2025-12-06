---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRZCPNN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyqgar6mWylDN0tzzXRcsLIv2HX6smgkxKfukb6HU9CgIgP63wLlhP79kd0egGaxua78vsMpUdmWIiiu1DhdNTMY4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFcD2gPVgnzgzv%2BjKSrcA9y%2FNhhiI0R3QfQyl3ZLbTr5JLajbRoWYUYbxBttloojbVCH022CtHjxWGLEkp%2BwXb2NEcYjLXb9hkaRCw3GgVjOm1z82aVD%2F%2FMkbjCyHsl24U0EEqIIKKIVULzgoIOha3AKaEzOIxMQsa68UbSQioJZUPEtxlhj0a3acqI0%2BKsLO9xOL%2FoTkdrf9hpn3Yb9sFFx1l1TBGbX3PgAFu2Y0HSzBqqaUG0db9NjB1TQumY%2B0PlOw9Jb8N5IJGyrZ6phhQ%2BTUfH3DVUxneYi%2B4lduVniqazELyPt9KY6gIey4AmW3lhj47nrD2ck3XhSspbI9F9a7FiK4m3SCTKir3OIitxMexjIM3rHNrRapJBPKfYOTYtxch%2BU0CeKhDyTvgds9GoXdLMJer6koxkV9uVIOEuO4olBo8hZEcB%2BFWUN19zsnPsGEZDe64k41rldrIz9JRIT7oOEdqsNm8gMJk1A%2BDGz9Cfj3xvLkDDujJhrDz772BeHLRf5lFSotuh%2B8S8qmSUH9rT%2BXZqVnaQHR83oxZXLe250Q36coB6w9C881rDmt%2BiHSWpj3U2Eqsk6IWpnzyeDwqZhimWWWrhd3tn38RlVrUyTv7NwiqElxvhSKcgLfW8pCiO0ZxFCvfJAMPOJ0MkGOqUBVGa8GDYyM54MlVjXNr34rbdj40AydqVCClpMCW5PgKnfVCsdHnstGAnCMaVWjiFRe5AiQtqdb0wtGp162srYN7NIvFSNeolHMqezPVWG3%2FEADBy%2B1cbsI%2B9U%2BeCdXZBIQKAwqmyWGgo1TJbnFpdZsK4HPzmiby1wifNdx3UnzBtx5J%2Fv4wzRUKRiyBV0IHR62AgyNedfIe8AGbxtw0K0VfV8%2FZNZ&X-Amz-Signature=f742a785a20867d7810a48de881d53e0e68c159aa4624ceb551cd24a6f0dc2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRZCPNN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyqgar6mWylDN0tzzXRcsLIv2HX6smgkxKfukb6HU9CgIgP63wLlhP79kd0egGaxua78vsMpUdmWIiiu1DhdNTMY4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFcD2gPVgnzgzv%2BjKSrcA9y%2FNhhiI0R3QfQyl3ZLbTr5JLajbRoWYUYbxBttloojbVCH022CtHjxWGLEkp%2BwXb2NEcYjLXb9hkaRCw3GgVjOm1z82aVD%2F%2FMkbjCyHsl24U0EEqIIKKIVULzgoIOha3AKaEzOIxMQsa68UbSQioJZUPEtxlhj0a3acqI0%2BKsLO9xOL%2FoTkdrf9hpn3Yb9sFFx1l1TBGbX3PgAFu2Y0HSzBqqaUG0db9NjB1TQumY%2B0PlOw9Jb8N5IJGyrZ6phhQ%2BTUfH3DVUxneYi%2B4lduVniqazELyPt9KY6gIey4AmW3lhj47nrD2ck3XhSspbI9F9a7FiK4m3SCTKir3OIitxMexjIM3rHNrRapJBPKfYOTYtxch%2BU0CeKhDyTvgds9GoXdLMJer6koxkV9uVIOEuO4olBo8hZEcB%2BFWUN19zsnPsGEZDe64k41rldrIz9JRIT7oOEdqsNm8gMJk1A%2BDGz9Cfj3xvLkDDujJhrDz772BeHLRf5lFSotuh%2B8S8qmSUH9rT%2BXZqVnaQHR83oxZXLe250Q36coB6w9C881rDmt%2BiHSWpj3U2Eqsk6IWpnzyeDwqZhimWWWrhd3tn38RlVrUyTv7NwiqElxvhSKcgLfW8pCiO0ZxFCvfJAMPOJ0MkGOqUBVGa8GDYyM54MlVjXNr34rbdj40AydqVCClpMCW5PgKnfVCsdHnstGAnCMaVWjiFRe5AiQtqdb0wtGp162srYN7NIvFSNeolHMqezPVWG3%2FEADBy%2B1cbsI%2B9U%2BeCdXZBIQKAwqmyWGgo1TJbnFpdZsK4HPzmiby1wifNdx3UnzBtx5J%2Fv4wzRUKRiyBV0IHR62AgyNedfIe8AGbxtw0K0VfV8%2FZNZ&X-Amz-Signature=a165fdcd30339ceabcb02d0c30ab83bf36ef53a49ffd04af42247bf73b2bc2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

