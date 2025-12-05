---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFZSHTE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLKbrKJnZS103yUmCOEU3A2pe3WBJOuI%2FBCKkaKOSnvQIgEFa9O38zHcApKR6Qaxp9%2BjWHXXPYNWGtAYIQArx8HKQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBZxP%2F3TBJZjkev%2BRircA%2F8fOlEccGeveAaqD6Z8yUH4twwmco2ghuw%2FwaeyGOwdkfr16EC%2BF%2FbI09hcRmNmGwX8XouNEbFy7oiPLbXSaRez4ALwuO7TcvOKUi0mZM60AEgsiOsJEet6bx%2FXFXYMrowBLWJcnFRjZOaodiEFVXbiFj7QkgWRhKRLFX0SFtHiCvOpO347SSog2KK85SLCtSZLGVVFtG0PEKNKBg0soeyaN107JMx%2B1Zqc8cVXpv8Uj4cWSu3VS51ieg8794ZH1Gz7oI2JcAv9oYgJSBsqMTcFuJ34UKpMXYPMzVhtfqdT%2FhBSNtTx%2B5HzdJvhzPOAl4%2B8sX7LB1Rl%2FwMKBFl9It5qhaX8HTZ7CTJJqYltX9CVlZDtTA7U3vPa0cju3ntiYK5zdg8FewRDC6NyRyM4%2FARoM6zLxO1MBjreT3TyWXzsd%2FU%2BgQvFnUWHb1V6H6NkXo9UWPK9JEteFPuPMBMP0tgAiD%2Bh0kXiSyGNJlglXPtRlLuTDKEhvhAork7EDGVsE7TtMJN8HSOPN7qccrY%2F9sbthWl4HLRYmNGScHqrF2A7mWtTIU98ZBzVHxm0zn15X%2FWQkO%2FxboTTvSZfN0jya25QotVufXxQH7ajHxqyaUgNCW9v9S%2Ft4csigacJMJWryckGOqUByw8b2Ih2ZipQFwhQeNIPzmUc8lTu%2BvcY1MKdDySGRYIVb2no5VAk7OvXI6SQ0TtWoC4GDeEBEWAqndVnEacLWJNLH9aW8Teka%2F5h3qM9yMADVw57yAZ0kIVAwBW6zzAvLkJGDn9J5PNxbq5cJMRvUHEWgozxUU9CX%2FAYWpSMY8Vo5o5HOEqnvjxy8aGFfzwV5drgMBXz7mYi0cV9NAo6%2BINyA5Xf&X-Amz-Signature=de5cb618747b8ac64cb71a751efbcdb7dccdc97685a7a33e21ef0ffde25b6833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFZSHTE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLKbrKJnZS103yUmCOEU3A2pe3WBJOuI%2FBCKkaKOSnvQIgEFa9O38zHcApKR6Qaxp9%2BjWHXXPYNWGtAYIQArx8HKQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBZxP%2F3TBJZjkev%2BRircA%2F8fOlEccGeveAaqD6Z8yUH4twwmco2ghuw%2FwaeyGOwdkfr16EC%2BF%2FbI09hcRmNmGwX8XouNEbFy7oiPLbXSaRez4ALwuO7TcvOKUi0mZM60AEgsiOsJEet6bx%2FXFXYMrowBLWJcnFRjZOaodiEFVXbiFj7QkgWRhKRLFX0SFtHiCvOpO347SSog2KK85SLCtSZLGVVFtG0PEKNKBg0soeyaN107JMx%2B1Zqc8cVXpv8Uj4cWSu3VS51ieg8794ZH1Gz7oI2JcAv9oYgJSBsqMTcFuJ34UKpMXYPMzVhtfqdT%2FhBSNtTx%2B5HzdJvhzPOAl4%2B8sX7LB1Rl%2FwMKBFl9It5qhaX8HTZ7CTJJqYltX9CVlZDtTA7U3vPa0cju3ntiYK5zdg8FewRDC6NyRyM4%2FARoM6zLxO1MBjreT3TyWXzsd%2FU%2BgQvFnUWHb1V6H6NkXo9UWPK9JEteFPuPMBMP0tgAiD%2Bh0kXiSyGNJlglXPtRlLuTDKEhvhAork7EDGVsE7TtMJN8HSOPN7qccrY%2F9sbthWl4HLRYmNGScHqrF2A7mWtTIU98ZBzVHxm0zn15X%2FWQkO%2FxboTTvSZfN0jya25QotVufXxQH7ajHxqyaUgNCW9v9S%2Ft4csigacJMJWryckGOqUByw8b2Ih2ZipQFwhQeNIPzmUc8lTu%2BvcY1MKdDySGRYIVb2no5VAk7OvXI6SQ0TtWoC4GDeEBEWAqndVnEacLWJNLH9aW8Teka%2F5h3qM9yMADVw57yAZ0kIVAwBW6zzAvLkJGDn9J5PNxbq5cJMRvUHEWgozxUU9CX%2FAYWpSMY8Vo5o5HOEqnvjxy8aGFfzwV5drgMBXz7mYi0cV9NAo6%2BINyA5Xf&X-Amz-Signature=bb3b246224046faf5ddf3f62ef55fe42c8e002927b204d822a51e66c10554010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

