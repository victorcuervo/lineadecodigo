---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CA72FEF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCD9eEVDNDOElGpFkuqMhXoVyoE9E%2BFOZ%2FF3yB0gG%2BVjAIgAc1tmiMKHb01iZnSwwmnmmLaBocQOGu09AL7H0XPFHUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDESA6ZEg%2B7gWtvtL7SrcA9DDZ44UinmHdKWe4wZMzxNb%2FbTriTpzRDORNgq5%2BR8fieMeH5Emeerje0MlNVDIrCgjA10PYklNsIx8Etk8IcNcWdIFrTjkAOwKvW1%2FCbewGW7OaF6Wda4YInsnkvEuUdNAd94cBlcwxw9fol2%2B1tw3%2B%2F34Um7bYAahSXypnZrOEVdOJ%2BJ69AcJgbkbLgrLs4DuPtP9Yy4hsmSx4M9VfP2rmr%2BpTV%2BrCk1j08xitTLAmR6C2ua9Ps8BIpTT0gHDcNu0SZWJ8iTqhfzKZPKEZRmypQxdm0OQxOV3NaSJw%2FwRuGW4KeYy3h9i1lm%2FI9v8vmrDnsS6eWYYgF%2F5NL7u4ddNn%2Fmzl%2F%2FwehrTLOKqOC1HiXSbjW7L84AULjuZ%2FTTV%2FG8ndBC2Oi5F9RMz8mYii9kqBKzYZc%2Ffi6R5fjXgHmKemQB9IBFz4ROy7U473QsxR%2FeTWPiUmFpIZ2Decg%2B0pzWFT04iBevh%2FbR5yCGOeW9ol61Hap6zFcvRPLhjhEXibcJ%2BvFP1IxYXl%2F9mKZOl5qCzQ2rOzyY1SiULbI3lmhWO9IyCSxbl7ggsRM2%2FHoe8M9BPDAJdCsLSmxqR41Fmdk7ixqS2WFgjrEfa4p0pp3%2F7vAjM6EoBbHec5AKbMOCFxckGOqUBfBTmHQsKj7%2FxV9AWG9R6lKuMP83NHkrFCEkQDDLirxlWreq%2FkMDfhdHlFggvycco1Qrd8XVBD%2B3ioINVfl6bKhUGiKpMhMJqWiAMPPrFoX%2FF0uZwnjy29tcbhUMi2%2BnTY0hWI%2BPj9%2B1YQiq4VNiRWcKn2M8SpQn0A%2FSXEpynYqiFDXtAv%2B8ofveKA2nrEhWyoqZUTpHsI%2B1y9WeT%2BwzDtSfdIVDW&X-Amz-Signature=8a0480df2525654f1551db595a33dcc262f4975efe9833802c5f340ab9ae8e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CA72FEF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCD9eEVDNDOElGpFkuqMhXoVyoE9E%2BFOZ%2FF3yB0gG%2BVjAIgAc1tmiMKHb01iZnSwwmnmmLaBocQOGu09AL7H0XPFHUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDESA6ZEg%2B7gWtvtL7SrcA9DDZ44UinmHdKWe4wZMzxNb%2FbTriTpzRDORNgq5%2BR8fieMeH5Emeerje0MlNVDIrCgjA10PYklNsIx8Etk8IcNcWdIFrTjkAOwKvW1%2FCbewGW7OaF6Wda4YInsnkvEuUdNAd94cBlcwxw9fol2%2B1tw3%2B%2F34Um7bYAahSXypnZrOEVdOJ%2BJ69AcJgbkbLgrLs4DuPtP9Yy4hsmSx4M9VfP2rmr%2BpTV%2BrCk1j08xitTLAmR6C2ua9Ps8BIpTT0gHDcNu0SZWJ8iTqhfzKZPKEZRmypQxdm0OQxOV3NaSJw%2FwRuGW4KeYy3h9i1lm%2FI9v8vmrDnsS6eWYYgF%2F5NL7u4ddNn%2Fmzl%2F%2FwehrTLOKqOC1HiXSbjW7L84AULjuZ%2FTTV%2FG8ndBC2Oi5F9RMz8mYii9kqBKzYZc%2Ffi6R5fjXgHmKemQB9IBFz4ROy7U473QsxR%2FeTWPiUmFpIZ2Decg%2B0pzWFT04iBevh%2FbR5yCGOeW9ol61Hap6zFcvRPLhjhEXibcJ%2BvFP1IxYXl%2F9mKZOl5qCzQ2rOzyY1SiULbI3lmhWO9IyCSxbl7ggsRM2%2FHoe8M9BPDAJdCsLSmxqR41Fmdk7ixqS2WFgjrEfa4p0pp3%2F7vAjM6EoBbHec5AKbMOCFxckGOqUBfBTmHQsKj7%2FxV9AWG9R6lKuMP83NHkrFCEkQDDLirxlWreq%2FkMDfhdHlFggvycco1Qrd8XVBD%2B3ioINVfl6bKhUGiKpMhMJqWiAMPPrFoX%2FF0uZwnjy29tcbhUMi2%2BnTY0hWI%2BPj9%2B1YQiq4VNiRWcKn2M8SpQn0A%2FSXEpynYqiFDXtAv%2B8ofveKA2nrEhWyoqZUTpHsI%2B1y9WeT%2BwzDtSfdIVDW&X-Amz-Signature=955def4a38ed41960527165e11762da82e863550959156df103c64eeda694010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

