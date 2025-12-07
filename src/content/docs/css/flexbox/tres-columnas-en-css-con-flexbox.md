---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YW6IP3I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6t59ut0D4pTb5p8Razi2x4Gb0tgQE%2BBJFBqKJnNRs6AiEAvL%2BVAhOpdJ9VYM7Xqf78oZAIeBN%2BqgE%2Bd%2FYWP0ETnu8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6E%2FNLjA9mlyH%2BWuircA2rdmcv946cNHw8zzN7nkvWxnuN2JdoASBJKNuycncePMiXOyqa9lkrbTEZKUOA0Cj95%2BN4NTHpFjvXGhgQm7CWkVChnTmNehCPjkk0Bw2gJDjSXyIt5nqN4SSlC354WyxVxlsSSC70djpKcbTFfyMFf6kYltWgJ4e7O1RU67CxRN6B7ikNFOVcRqNOkAYSbTs9eRrS%2B53%2F6Fed62z1Ptz1V6FabSs%2BjUJCwMVWTytwS%2BBh%2BDmu%2FNd4d6k85b2RdnrGA5Y%2F4IsIISj7vhreD7Z%2FCwbBcfW3xI6DMByWSADyhm800cWWOE%2BqnWPaw158ZKgRX283SgDnjMqVAdDLyBTvxUFNCIBuc4ypI6HNdPGaib0zJZIydYNiPXRe1oYaqxiM%2BVEoBpThZigoTMD5rBKHplPvCgQB23v%2Fxn1G4xyOUyNrjf%2FTqG1sFF5NlJQN7ZtBgyQup8kBNEpOBf1FmkCwmXvl2pl0pQSW7hoIv4Aa33pBddro6aT78rNKAz0Ja5a0F1%2BllQf%2B4AsKHJ1XLYe8dYLlI7d5TvaBmScVuLf5WMPqaYya3tZ3EemoL5pYU1hpWMBKUXS97mC11tY67OgoPBXvu6ot%2Fbh1VutXk8WHfcIv5Fp7VZ3Bka3q9MKqj1MkGOqUBHqO%2BCA5AL5vr%2BkQYCoy0XDkk34Fg8Rq78fjUR8bOwYllUBUGB1C4im096TPpUFHpsM44yi2QChypukvS6%2FkK8xpd1GTXzlnAEjNYNOXDUis4z7%2FV%2FvyKVn7O88bG%2B7vIrFvP%2BCJ%2FfjNe%2BrBbr8IQ%2Fmf%2BUm52141w9WQCqvLKaM9FbPYNwpRsEDEw46C3otvM%2F2407WeyItEUUj7hSScf7X9BbCas&X-Amz-Signature=891597eb21b58ea462f5615093f8cf1fc04ceff340980a6f86ea8f34e7c9ce0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YW6IP3I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6t59ut0D4pTb5p8Razi2x4Gb0tgQE%2BBJFBqKJnNRs6AiEAvL%2BVAhOpdJ9VYM7Xqf78oZAIeBN%2BqgE%2Bd%2FYWP0ETnu8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6E%2FNLjA9mlyH%2BWuircA2rdmcv946cNHw8zzN7nkvWxnuN2JdoASBJKNuycncePMiXOyqa9lkrbTEZKUOA0Cj95%2BN4NTHpFjvXGhgQm7CWkVChnTmNehCPjkk0Bw2gJDjSXyIt5nqN4SSlC354WyxVxlsSSC70djpKcbTFfyMFf6kYltWgJ4e7O1RU67CxRN6B7ikNFOVcRqNOkAYSbTs9eRrS%2B53%2F6Fed62z1Ptz1V6FabSs%2BjUJCwMVWTytwS%2BBh%2BDmu%2FNd4d6k85b2RdnrGA5Y%2F4IsIISj7vhreD7Z%2FCwbBcfW3xI6DMByWSADyhm800cWWOE%2BqnWPaw158ZKgRX283SgDnjMqVAdDLyBTvxUFNCIBuc4ypI6HNdPGaib0zJZIydYNiPXRe1oYaqxiM%2BVEoBpThZigoTMD5rBKHplPvCgQB23v%2Fxn1G4xyOUyNrjf%2FTqG1sFF5NlJQN7ZtBgyQup8kBNEpOBf1FmkCwmXvl2pl0pQSW7hoIv4Aa33pBddro6aT78rNKAz0Ja5a0F1%2BllQf%2B4AsKHJ1XLYe8dYLlI7d5TvaBmScVuLf5WMPqaYya3tZ3EemoL5pYU1hpWMBKUXS97mC11tY67OgoPBXvu6ot%2Fbh1VutXk8WHfcIv5Fp7VZ3Bka3q9MKqj1MkGOqUBHqO%2BCA5AL5vr%2BkQYCoy0XDkk34Fg8Rq78fjUR8bOwYllUBUGB1C4im096TPpUFHpsM44yi2QChypukvS6%2FkK8xpd1GTXzlnAEjNYNOXDUis4z7%2FV%2FvyKVn7O88bG%2B7vIrFvP%2BCJ%2FfjNe%2BrBbr8IQ%2Fmf%2BUm52141w9WQCqvLKaM9FbPYNwpRsEDEw46C3otvM%2F2407WeyItEUUj7hSScf7X9BbCas&X-Amz-Signature=3aedbbc7a6c78dc7fbde13a5e3d67f0ac1531afe04a21cc7cfd20298c2436e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

