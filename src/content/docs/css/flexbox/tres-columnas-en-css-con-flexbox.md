---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6D54VUB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhoPkWNJSeL91hv8ffJ%2Bi2sH46x66dPsmHV6zLEirawIgf7u%2FQxzLKSrQfgZ4dwFF71CUzMrV%2Be9YxfvpUgNqkO0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCMhTkwC11A8luUb4ircA%2BHj1zBQ7zM6K%2Brqj05MsmhO%2FoptIr4ODX5p7Q82AucFVk%2FO3T7xPQB3aNtCstDZlS2p1YuanldpPe%2FBGJSJFDn99daT0IjTUtQjZkMm7eIokdhIFggdHKW%2Bg2QEtWNOWULofI6YuhGcqC38qR62tLrAWFXNubBQmMAX7JezryZJUySAuOrjsNEWqxTHt3c25k59z%2Bq6HXhSHq1EMfhG%2Fv0YswD%2BHaCt4qObRtf4FwK4V8qy1k8r6iWhZacoL6APDbh5%2FSrbxa%2F3bM6xx6tcISbHWPlFQvA5WHB7Jv1dHTcjFyIX4Ra4JFN5%2FpStAXi6hFHgWugltAm9YIE8Zv%2Blxkri%2BMtvOuO3kbULRvCiSsuRMXQZDXlSa6NKnG9UGWQCAheyaqaSNUlzwqLo7D0lpR%2B02DhhoPBxOJD5c%2BgGJ%2F41vbvd5FmMWp8VxsmXit5eQd28xPcIiqNxetpEV1a5sJkbOuh1%2BW9nTIpmvvoJiIWbiiYMvKkptSp7cKAShIooXsbtu%2Fxf4CbKuvfne1MCwe7D109KmmbYiUX45hwFV0svAxq6OhbXCi0h2C8nK%2Fc9B7z4J41Jwzvc8x9zHxVElop3RY%2BAS8%2F77rfIXmfoymln3v21VEw9wIZolZMgMLSMyMkGOqUB8CbZLWLEi%2FItpnNUBqBEoB1vp1rLpHLT28rcYe6lq97l82QQeIe8xqr1fQ52%2FVv2rS0uwHIaNqk4yj8lVWo7Z4GMONYVAaOu67VVX3nKCH5oGHsomVBIYrgKxmxbc2eI2w%2F1rcZVYQ%2FE7Hw9l%2BKgf39KpCQNpY8el9GsW1JMyk9l8bnyto%2BTpkeoj23AGG1e%2Fy%2BwzNKtCn0w%2FWLQEXmptUoXSlho&X-Amz-Signature=77623beee1973f6f17654bee51e140df299c05484446d11a12873d421e137c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6D54VUB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhoPkWNJSeL91hv8ffJ%2Bi2sH46x66dPsmHV6zLEirawIgf7u%2FQxzLKSrQfgZ4dwFF71CUzMrV%2Be9YxfvpUgNqkO0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCMhTkwC11A8luUb4ircA%2BHj1zBQ7zM6K%2Brqj05MsmhO%2FoptIr4ODX5p7Q82AucFVk%2FO3T7xPQB3aNtCstDZlS2p1YuanldpPe%2FBGJSJFDn99daT0IjTUtQjZkMm7eIokdhIFggdHKW%2Bg2QEtWNOWULofI6YuhGcqC38qR62tLrAWFXNubBQmMAX7JezryZJUySAuOrjsNEWqxTHt3c25k59z%2Bq6HXhSHq1EMfhG%2Fv0YswD%2BHaCt4qObRtf4FwK4V8qy1k8r6iWhZacoL6APDbh5%2FSrbxa%2F3bM6xx6tcISbHWPlFQvA5WHB7Jv1dHTcjFyIX4Ra4JFN5%2FpStAXi6hFHgWugltAm9YIE8Zv%2Blxkri%2BMtvOuO3kbULRvCiSsuRMXQZDXlSa6NKnG9UGWQCAheyaqaSNUlzwqLo7D0lpR%2B02DhhoPBxOJD5c%2BgGJ%2F41vbvd5FmMWp8VxsmXit5eQd28xPcIiqNxetpEV1a5sJkbOuh1%2BW9nTIpmvvoJiIWbiiYMvKkptSp7cKAShIooXsbtu%2Fxf4CbKuvfne1MCwe7D109KmmbYiUX45hwFV0svAxq6OhbXCi0h2C8nK%2Fc9B7z4J41Jwzvc8x9zHxVElop3RY%2BAS8%2F77rfIXmfoymln3v21VEw9wIZolZMgMLSMyMkGOqUB8CbZLWLEi%2FItpnNUBqBEoB1vp1rLpHLT28rcYe6lq97l82QQeIe8xqr1fQ52%2FVv2rS0uwHIaNqk4yj8lVWo7Z4GMONYVAaOu67VVX3nKCH5oGHsomVBIYrgKxmxbc2eI2w%2F1rcZVYQ%2FE7Hw9l%2BKgf39KpCQNpY8el9GsW1JMyk9l8bnyto%2BTpkeoj23AGG1e%2Fy%2BwzNKtCn0w%2FWLQEXmptUoXSlho&X-Amz-Signature=b340ee38e45bfc1b5bd0ceec87cd172c4b7a27dee0e8f418bd18aef3ae9c245b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

