---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QH6ZMBN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsE%2BBRT4KVip%2FtnJSFR74zXtxzUBcs%2FOR5KrZMADk6IAiB%2FL0L%2F9VsgIrM7b83vobpBDIknR6p0LMdTJ9a4PeNAWyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMoGAtOLJB%2FzhuUfwzKtwDN%2FKRRJJo6Ft15goRBQgfY75jGstGWmzhYgQxWZvmUmybZU2TQ%2F%2BR3tBkONinP%2BwaY5eBRHAFDHXj0gCPX%2FzOQmTmkssafsXo8Mr1jmBdYTUZRFQYZhb31lfruVb4ug%2BPuOPbxM5GdS84VfuKZAg8UQ3poGdbC7LISCOg79KmuwpuREH1%2FAUIB%2F3fIhARKz6YTJS2ZYaNpGQLomnOGKg6Flx9Pzhb8cX02hAoavcmhb6pWVespMYGUpHoEpsPMXygzuBV0jH9BBoTJ6Wh%2F3kcrtSoqw%2F5o4g4pBGRr9mWbbzt34MEZPMcBM9A4vKG1wZZLcCpVi21X36cWIY50H2UqHyHM%2FrVLsWSV%2BiPksjtuv4Q8t2Cqa7O7wXdTNvzoxpl22kAM3zMM8uLbo%2BnXSvlvADeI8L2Ntgxs%2BfGC3iZissATgbRB6ZeH8a74l2aedF6dPhZNMIBnUgybynQdwo8Dc4xrptvlHb6YCHta8IHqSZhZQinoM2uBf3wDzhqmBhxaNJLPDHlaeHsRV0%2B2veLcthcXkcbs895lZb%2BJ%2FQirwt3Bfbpx%2By3IRVrYdOAQ2%2F%2FS457F21FAry4yanbSQwKvfSPFhBYxTLB%2Bp7pIBbqUp%2BMe%2Br29THU8pbs%2FQsw6YDNyQY6pgF5Wym%2FdOtm8lFaC9TY6iB8%2FvzccYhBOC3vr%2FIWxXvFaGIvrEmR2xxgSjNQEaocdIOVT05wyVf4Hts%2FW85IrB%2FqFm4641TWvcBkarRFcq9MNagGY4Ocoujvms9CBcTkjxf3PAxEsP9lv7kU294t9j19jJiklOmbBIBmVglgsk9E6x%2B0DdYO4A5f7oyHVItnUfCacMBQXMTxXL7H5vHkPpUl%2BITIE1GP&X-Amz-Signature=e0a49b4e004111ebe2b58af338ef45cbd76b84bf09ea2a03fc8799f44b8c96fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QH6ZMBN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsE%2BBRT4KVip%2FtnJSFR74zXtxzUBcs%2FOR5KrZMADk6IAiB%2FL0L%2F9VsgIrM7b83vobpBDIknR6p0LMdTJ9a4PeNAWyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMoGAtOLJB%2FzhuUfwzKtwDN%2FKRRJJo6Ft15goRBQgfY75jGstGWmzhYgQxWZvmUmybZU2TQ%2F%2BR3tBkONinP%2BwaY5eBRHAFDHXj0gCPX%2FzOQmTmkssafsXo8Mr1jmBdYTUZRFQYZhb31lfruVb4ug%2BPuOPbxM5GdS84VfuKZAg8UQ3poGdbC7LISCOg79KmuwpuREH1%2FAUIB%2F3fIhARKz6YTJS2ZYaNpGQLomnOGKg6Flx9Pzhb8cX02hAoavcmhb6pWVespMYGUpHoEpsPMXygzuBV0jH9BBoTJ6Wh%2F3kcrtSoqw%2F5o4g4pBGRr9mWbbzt34MEZPMcBM9A4vKG1wZZLcCpVi21X36cWIY50H2UqHyHM%2FrVLsWSV%2BiPksjtuv4Q8t2Cqa7O7wXdTNvzoxpl22kAM3zMM8uLbo%2BnXSvlvADeI8L2Ntgxs%2BfGC3iZissATgbRB6ZeH8a74l2aedF6dPhZNMIBnUgybynQdwo8Dc4xrptvlHb6YCHta8IHqSZhZQinoM2uBf3wDzhqmBhxaNJLPDHlaeHsRV0%2B2veLcthcXkcbs895lZb%2BJ%2FQirwt3Bfbpx%2By3IRVrYdOAQ2%2F%2FS457F21FAry4yanbSQwKvfSPFhBYxTLB%2Bp7pIBbqUp%2BMe%2Br29THU8pbs%2FQsw6YDNyQY6pgF5Wym%2FdOtm8lFaC9TY6iB8%2FvzccYhBOC3vr%2FIWxXvFaGIvrEmR2xxgSjNQEaocdIOVT05wyVf4Hts%2FW85IrB%2FqFm4641TWvcBkarRFcq9MNagGY4Ocoujvms9CBcTkjxf3PAxEsP9lv7kU294t9j19jJiklOmbBIBmVglgsk9E6x%2B0DdYO4A5f7oyHVItnUfCacMBQXMTxXL7H5vHkPpUl%2BITIE1GP&X-Amz-Signature=4e32c203a37318e318596f0a000ed78a9c25334fe04d865e2ca8b8b3483ce269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

