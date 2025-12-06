---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVRCQB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0rFx3oJIpVWbbxt4Jb2DZ%2BMesDFGTyjKV0w3VwfsmYAiEA56TG8pyR0W9XZZDi2L00pjTLnM4n%2FOw04H5QB%2BIWprQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNvF5D9wxfF%2BJv0I9ircA8HYU2OPbtvr5OlxfZrd%2BKtcPSpNw8vXMXYF6eXduhhH3CK%2BO8s011dC9E6kUciCEtheBbsfIUYr5FNIWo8tJrbXU2JyXs63j7MjTi390qoyxHi%2FoRQXu%2BCpEBH%2BZ%2BATAZ50GG%2BinVhc%2Fk7a4QIpE6zOprQtwsrKK4Ckz2lboNU25pt7XO6hGdgETRNXI%2BW28%2BLq%2BDymvkH4l0CYXzhP4WdumKejLZLbmA2v4jUqb3fnpDkGfa3acq43lAnKmxZqnJS2H5JDRMXPhPVB2WdfKXFRyeBpvdjksoaEROy%2BFUrsNWsYVU45sqvv7k9fMaF0OLIpRG71Yhelbbspd%2F9%2FYCLAwQP4YBghY7PYyS%2FJVCVmHRthcteZVAk0I9QYT17wt0BY5fLK1Fioe47AY7rGZC6gg%2FonVQeIi%2F03qtql1Rl6QWbCqcCTVbeCHCAzpCU2GDtMtFh0CvGjV5qmcZBIcLw2zx%2BXj%2FtykfxGtFpZc8pWQfstT63xLO7QpFzRq%2BMaKQ%2BttP%2FLnvSU5GpGAado5b6KVPBiggyAuaU5Z0nU9M0pwk7NaFDIQhWG092WROPIM1hSu87TCyb7j1JMjb%2BgpqxqWQVDiVINiC0YC7vyR2ylfqRb%2F4DmtfCZyubAMO2ez8kGOqUB%2BaFs9mIWjknyCbka%2FxgQznoQY%2BnQDiV3%2B28iYxKZPxIvZDZmX1yS2pF%2F2cpJV3JnXxu9nwvOuzNuCEpJf5kh3c1O%2FvOWyMlIt%2FoVNZabqsymDvuU3LHOUcxCrlkBRjDpXdXB%2FjY7I%2Bq5ojt0uoLnSRfW%2FVJQKFN%2B95CLxJ8YU9yp8XuejfbkgMfygS%2BmlM9JK7NC7bW06Ie%2Fk4TATpWr1848kA8L&X-Amz-Signature=a99c508fbae4ca20da112aa7342ccdbdccfa723aa00d0897295d099293daa1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVRCQB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0rFx3oJIpVWbbxt4Jb2DZ%2BMesDFGTyjKV0w3VwfsmYAiEA56TG8pyR0W9XZZDi2L00pjTLnM4n%2FOw04H5QB%2BIWprQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNvF5D9wxfF%2BJv0I9ircA8HYU2OPbtvr5OlxfZrd%2BKtcPSpNw8vXMXYF6eXduhhH3CK%2BO8s011dC9E6kUciCEtheBbsfIUYr5FNIWo8tJrbXU2JyXs63j7MjTi390qoyxHi%2FoRQXu%2BCpEBH%2BZ%2BATAZ50GG%2BinVhc%2Fk7a4QIpE6zOprQtwsrKK4Ckz2lboNU25pt7XO6hGdgETRNXI%2BW28%2BLq%2BDymvkH4l0CYXzhP4WdumKejLZLbmA2v4jUqb3fnpDkGfa3acq43lAnKmxZqnJS2H5JDRMXPhPVB2WdfKXFRyeBpvdjksoaEROy%2BFUrsNWsYVU45sqvv7k9fMaF0OLIpRG71Yhelbbspd%2F9%2FYCLAwQP4YBghY7PYyS%2FJVCVmHRthcteZVAk0I9QYT17wt0BY5fLK1Fioe47AY7rGZC6gg%2FonVQeIi%2F03qtql1Rl6QWbCqcCTVbeCHCAzpCU2GDtMtFh0CvGjV5qmcZBIcLw2zx%2BXj%2FtykfxGtFpZc8pWQfstT63xLO7QpFzRq%2BMaKQ%2BttP%2FLnvSU5GpGAado5b6KVPBiggyAuaU5Z0nU9M0pwk7NaFDIQhWG092WROPIM1hSu87TCyb7j1JMjb%2BgpqxqWQVDiVINiC0YC7vyR2ylfqRb%2F4DmtfCZyubAMO2ez8kGOqUB%2BaFs9mIWjknyCbka%2FxgQznoQY%2BnQDiV3%2B28iYxKZPxIvZDZmX1yS2pF%2F2cpJV3JnXxu9nwvOuzNuCEpJf5kh3c1O%2FvOWyMlIt%2FoVNZabqsymDvuU3LHOUcxCrlkBRjDpXdXB%2FjY7I%2Bq5ojt0uoLnSRfW%2FVJQKFN%2B95CLxJ8YU9yp8XuejfbkgMfygS%2BmlM9JK7NC7bW06Ie%2Fk4TATpWr1848kA8L&X-Amz-Signature=8c72dc3834db643f748dc7f19ce5e53c63f0610f78bdcc709007d5e43537bc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

