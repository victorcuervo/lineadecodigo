---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOQOEYH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMgvpURU5Nkhzdwo4Bd9ns%2Fabv64yGycCrc%2BZxU7BIQQIgVHXl%2FOE6Co7lx6e5inaJKRw0g%2FsllWZIqbgFYCggf7kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRUQ0sko1kHDkvPbSrcA16tJ4J1Yol7ErApky7lb9b5eAZMt%2B41aXEMPdDIjv49pcoeqveZRpN0JedVUKZYfCW13Ud7Q008A%2BMrmSeR3rmBqg6Zvdcv9cffCLs4SzrY8Wxt6blPHvmd7S%2BfpO4GZyJFRLFKOYqKMBd5t9vmYx%2BAx33h37ff0rn2dEqMnpNzL7NQ9cw228BDgklTWOwm4VbMuIsU1zEzoPuZwgY2yTPwzDXd4SmARArTlNkPjSgwc47ueV%2BDBidG6y0BsWukOKwQKvmcAJPZzKh%2FpXuZiAhFV7On7JXPbz%2FOkN0cqH%2B9lUoW%2FZpgmtIrfR05bXFv7wzhq%2FjOCWW2Et%2B04WCpazhLzrNRAnY6HqJDFgrF0%2BlEOk4RaENUvykfTG8dZwV6Fa6vPfvirXKOwj99ApDRHh%2FyEq2abinAUaynLfVdlmAhXurM3V54cpLoim5AXp1QyQYfHtC5Zq3akJXf44on3GQhZ9%2BbXciRbY72Pzj4mXBeyTmG90%2F3GftuNIvZVyJUtw2R%2FenEouiQMPY54ZBzvuUFldTmxuEaYQIc7FNT3mSok1OoCUG4oy0i4IfDXuZ4WQpbi2aOpUkYM326wf9sRzydwmqvpXdbeeDi%2F1so4yRj2L9pinPDUuYZxPCRMMv90skGOqUB83o0YKA%2FGMuiNg1GgKLg1R9ogLGO%2BktoWxRghCfQs2yXkWpwMh%2FK4W%2F%2FB5b3npDDLUdEGTa3rt5JSdGcwsrmaSIzP0bof2SMH%2FIb0DQZiAi2q0KZeLRfh87i1Dw9UmD%2ByZBkHxLNAE5ugP4A%2ByDPFcySr7K0fL2HikPy%2F3VSrvPATtIxezMPfT%2B0nuiKC3EsM2wwcLCCaQzREaX%2BGH8sk4GEDoTg&X-Amz-Signature=a702c753fd1541825c5520fda1515f061df7fe4894688cd917d73a47a9229071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOQOEYH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMgvpURU5Nkhzdwo4Bd9ns%2Fabv64yGycCrc%2BZxU7BIQQIgVHXl%2FOE6Co7lx6e5inaJKRw0g%2FsllWZIqbgFYCggf7kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRUQ0sko1kHDkvPbSrcA16tJ4J1Yol7ErApky7lb9b5eAZMt%2B41aXEMPdDIjv49pcoeqveZRpN0JedVUKZYfCW13Ud7Q008A%2BMrmSeR3rmBqg6Zvdcv9cffCLs4SzrY8Wxt6blPHvmd7S%2BfpO4GZyJFRLFKOYqKMBd5t9vmYx%2BAx33h37ff0rn2dEqMnpNzL7NQ9cw228BDgklTWOwm4VbMuIsU1zEzoPuZwgY2yTPwzDXd4SmARArTlNkPjSgwc47ueV%2BDBidG6y0BsWukOKwQKvmcAJPZzKh%2FpXuZiAhFV7On7JXPbz%2FOkN0cqH%2B9lUoW%2FZpgmtIrfR05bXFv7wzhq%2FjOCWW2Et%2B04WCpazhLzrNRAnY6HqJDFgrF0%2BlEOk4RaENUvykfTG8dZwV6Fa6vPfvirXKOwj99ApDRHh%2FyEq2abinAUaynLfVdlmAhXurM3V54cpLoim5AXp1QyQYfHtC5Zq3akJXf44on3GQhZ9%2BbXciRbY72Pzj4mXBeyTmG90%2F3GftuNIvZVyJUtw2R%2FenEouiQMPY54ZBzvuUFldTmxuEaYQIc7FNT3mSok1OoCUG4oy0i4IfDXuZ4WQpbi2aOpUkYM326wf9sRzydwmqvpXdbeeDi%2F1so4yRj2L9pinPDUuYZxPCRMMv90skGOqUB83o0YKA%2FGMuiNg1GgKLg1R9ogLGO%2BktoWxRghCfQs2yXkWpwMh%2FK4W%2F%2FB5b3npDDLUdEGTa3rt5JSdGcwsrmaSIzP0bof2SMH%2FIb0DQZiAi2q0KZeLRfh87i1Dw9UmD%2ByZBkHxLNAE5ugP4A%2ByDPFcySr7K0fL2HikPy%2F3VSrvPATtIxezMPfT%2B0nuiKC3EsM2wwcLCCaQzREaX%2BGH8sk4GEDoTg&X-Amz-Signature=dac638a8c4e6a262deb4f4267528162c3827f9d88b4bc9dbce7842bb57d63b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

