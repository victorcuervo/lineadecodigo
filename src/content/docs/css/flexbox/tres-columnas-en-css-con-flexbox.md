---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZP3334%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDizHvNyLSo9oFA62gE0J2ycqSGsCEgj9TtHjODdL6oZAIgLfW63cA7WmY3rsOI1fj%2B33tVbMpiYS5V8%2B0MH%2F8w%2BIEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDP4ozF%2FXkPaUUaDSLircA3sErp%2BvpGIhOTTemQbH57i4a2gWvhh4EMbuqePxtYOhSsAcwCug4fjnSnLnViyHc%2FXDYG0IS3RZ8cDCoCB%2BO9uyPFgiLDb8exX%2FOGp9%2FJv%2BJLP6fOwmxyWLcKs%2BXO2B%2BKnyU89i01dG4vOPk8TmDmGKV2UJI0EmN1kEAReSBpRbYYF7VUFCti7F5ik71Ugc28uIM8ec4iGcHzaBqDEAOaU%2BNd3yy6CsAG2PeJ75XdsV%2FHUw3eww6OnVOHd%2Br91%2BoE4cz6tD82DrP6Yux14fpKBFK5jmrvfSaK3gwe20bR8CkIzBfDwHP9ODpV6K%2Bk91i2%2Fxj5FSjSJXQ6qovc8u%2Fndo6fUNXqiRBtA0kHR%2B3uVz88zCOxybFpEFcZqvuG3S4PZpG2GmBbDqNLEtvUXALV%2Feu9Mi6tmrtwYiIL1qOI%2FbhYI9rU65PA0N7baIDlJAfMIg3%2BzndTd%2F3KyDPIQYcJv2RdhvZHXTyAo2QRXWUvkujCD2M4tcOeH4mZOqx0pslO%2BiryshslB7E5aWuov%2BIO6TPGDGLLiNC9jK6kKVqKndcb1O1IkHVee72wUOY5gZQFIxDrp%2FrVjdrljd9KCYASYITZ8eHhrN9uQ89fcahs6YDtgvNfohztv3yxYkMKG1w8kGOqUB084DoaHutPISuSnfA88V6iGsGHCQXaoNITsGcSuCY3sp8CXycXfi6qF84IWF6bHz5NKKqtNWVJ0B3djc56%2FWGS9emkruJFsuWdJLyIpqTf%2F3Tgz0i42ZHGUN1Ywoox1njSdnNayZr5GgTTCgzV5brXYHWKa%2B%2BNoo7TC%2FD8TO%2FBBS12ZlGUzw1ahKXb1K8FmaBRSfbIgUMES7h2yeSbTnTiD9AW2t&X-Amz-Signature=4fd6871b398d91974c5ef3a7b9029eced4280e824ceb814221a1fa45ac9fdb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZP3334%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDizHvNyLSo9oFA62gE0J2ycqSGsCEgj9TtHjODdL6oZAIgLfW63cA7WmY3rsOI1fj%2B33tVbMpiYS5V8%2B0MH%2F8w%2BIEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDP4ozF%2FXkPaUUaDSLircA3sErp%2BvpGIhOTTemQbH57i4a2gWvhh4EMbuqePxtYOhSsAcwCug4fjnSnLnViyHc%2FXDYG0IS3RZ8cDCoCB%2BO9uyPFgiLDb8exX%2FOGp9%2FJv%2BJLP6fOwmxyWLcKs%2BXO2B%2BKnyU89i01dG4vOPk8TmDmGKV2UJI0EmN1kEAReSBpRbYYF7VUFCti7F5ik71Ugc28uIM8ec4iGcHzaBqDEAOaU%2BNd3yy6CsAG2PeJ75XdsV%2FHUw3eww6OnVOHd%2Br91%2BoE4cz6tD82DrP6Yux14fpKBFK5jmrvfSaK3gwe20bR8CkIzBfDwHP9ODpV6K%2Bk91i2%2Fxj5FSjSJXQ6qovc8u%2Fndo6fUNXqiRBtA0kHR%2B3uVz88zCOxybFpEFcZqvuG3S4PZpG2GmBbDqNLEtvUXALV%2Feu9Mi6tmrtwYiIL1qOI%2FbhYI9rU65PA0N7baIDlJAfMIg3%2BzndTd%2F3KyDPIQYcJv2RdhvZHXTyAo2QRXWUvkujCD2M4tcOeH4mZOqx0pslO%2BiryshslB7E5aWuov%2BIO6TPGDGLLiNC9jK6kKVqKndcb1O1IkHVee72wUOY5gZQFIxDrp%2FrVjdrljd9KCYASYITZ8eHhrN9uQ89fcahs6YDtgvNfohztv3yxYkMKG1w8kGOqUB084DoaHutPISuSnfA88V6iGsGHCQXaoNITsGcSuCY3sp8CXycXfi6qF84IWF6bHz5NKKqtNWVJ0B3djc56%2FWGS9emkruJFsuWdJLyIpqTf%2F3Tgz0i42ZHGUN1Ywoox1njSdnNayZr5GgTTCgzV5brXYHWKa%2B%2BNoo7TC%2FD8TO%2FBBS12ZlGUzw1ahKXb1K8FmaBRSfbIgUMES7h2yeSbTnTiD9AW2t&X-Amz-Signature=4b478dbb84747799c63acfd90b9000eca143f0b9a07aa87b729879b98447e7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

