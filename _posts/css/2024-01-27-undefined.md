---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Q5SKGS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICxFsaDykq2aUa2UmQak20zAxsgZ%2BpwQL3DWWylrClbLAiBwbJlqy%2FC117APfD90Q4IfNwq6dLErmmCvWYhUuQ2C6Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM3c1WlIpAOK7FbpRcKtwDmDjbvSUFQJqOlQEFov34lgSUx7nJdZv8f048327HBCa1ytCopV%2F%2B3wdwTmS1oDuAZsaa4oKeGFyz1f0pdI60YrJlGOS76Iw0279OfvMIvKjg%2F9Zz172qk2KERc%2BZ4Itbnha61%2FG7l%2Fw42ekbYpq4pEW9LuVaF7PacWdX3fWBdfem0kXi3ITFEkQwTewYbnxHkVlhuJ2yKhze6FyIYlIyVIjEBzcqtoJxtotidHgZUWIFpjyvUrP%2B85VxJZRRX49P4VrUYEi4nI40g6fMSFBrsD1Qc7ljrrf8tM4sWK3gaISYqXLwM0ORkH%2B%2BAjO2EmQ7HcsJ8hYagDrzI3DfNxAyFDvprRPesQrdFlcWeQGiD5KXvZclsN%2Fni6SVy%2FFtD9NDAuHOoagN0%2B5VD3NAUTJCH8rZd2hprpncS1Gsa7hj0D2ZJrWh9HsODEFyQDjbzjcRjrWM%2BFio7lH22tTmbz4VC7eehFFb9QZ1BI3yFKfVmQlWZNAwHgRmE8PyPX68EfamN5KXatJ%2F4m3Tr7bxRSeUNEXunxJKdhqf4Fep0fkmOqlI%2B8j9lYd4ARQPTKgmdg9%2BCZDZfyswBIFIHvG04fP278gLW%2B1%2FkJ78tSvJMUC68C6AK3cphsG0w4Tbo%2FgwkZy%2ByQY6pgHT0ZULR26%2F2XE%2FrNkDDcrY3Sni0jEZIK04c0yIrPNy20xZ%2BDNJeB%2B22IOseP%2BhBJEvbX5PNNCv48CsnEtEiZaR9svznDcmIyehzpfcgS4fV2nbzPxvCVCoVwKoXkd3rDuQlUp%2F9Pyj5t8f02pte4LycW3Yv%2B19YQ1OYlxOy%2BugSVTnpgaFUU9YNtRuAZlaDVRaxr8lHJtOHN73KI0AzRjhN2JkDLM9&X-Amz-Signature=fca00a6e5f8eefda421813b1bb5afd9a215d3307b963f380e896a8a779297a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Q5SKGS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICxFsaDykq2aUa2UmQak20zAxsgZ%2BpwQL3DWWylrClbLAiBwbJlqy%2FC117APfD90Q4IfNwq6dLErmmCvWYhUuQ2C6Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM3c1WlIpAOK7FbpRcKtwDmDjbvSUFQJqOlQEFov34lgSUx7nJdZv8f048327HBCa1ytCopV%2F%2B3wdwTmS1oDuAZsaa4oKeGFyz1f0pdI60YrJlGOS76Iw0279OfvMIvKjg%2F9Zz172qk2KERc%2BZ4Itbnha61%2FG7l%2Fw42ekbYpq4pEW9LuVaF7PacWdX3fWBdfem0kXi3ITFEkQwTewYbnxHkVlhuJ2yKhze6FyIYlIyVIjEBzcqtoJxtotidHgZUWIFpjyvUrP%2B85VxJZRRX49P4VrUYEi4nI40g6fMSFBrsD1Qc7ljrrf8tM4sWK3gaISYqXLwM0ORkH%2B%2BAjO2EmQ7HcsJ8hYagDrzI3DfNxAyFDvprRPesQrdFlcWeQGiD5KXvZclsN%2Fni6SVy%2FFtD9NDAuHOoagN0%2B5VD3NAUTJCH8rZd2hprpncS1Gsa7hj0D2ZJrWh9HsODEFyQDjbzjcRjrWM%2BFio7lH22tTmbz4VC7eehFFb9QZ1BI3yFKfVmQlWZNAwHgRmE8PyPX68EfamN5KXatJ%2F4m3Tr7bxRSeUNEXunxJKdhqf4Fep0fkmOqlI%2B8j9lYd4ARQPTKgmdg9%2BCZDZfyswBIFIHvG04fP278gLW%2B1%2FkJ78tSvJMUC68C6AK3cphsG0w4Tbo%2FgwkZy%2ByQY6pgHT0ZULR26%2F2XE%2FrNkDDcrY3Sni0jEZIK04c0yIrPNy20xZ%2BDNJeB%2B22IOseP%2BhBJEvbX5PNNCv48CsnEtEiZaR9svznDcmIyehzpfcgS4fV2nbzPxvCVCoVwKoXkd3rDuQlUp%2F9Pyj5t8f02pte4LycW3Yv%2B19YQ1OYlxOy%2BugSVTnpgaFUU9YNtRuAZlaDVRaxr8lHJtOHN73KI0AzRjhN2JkDLM9&X-Amz-Signature=21fb2b990ad75af3f5b1976a1de8ec894e866d32c7e3a8525d716430dc89ce81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

