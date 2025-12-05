---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMGXPMO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPlEqxqdBm6ZEVz%2FRRqErt95%2FwoAwci23wP0I81S3CwgIhAPFwEXhx4Z4rM1dQxfRrattXOx%2Fu9eNABQsAVukp4zO6Kv8DCGgQABoMNjM3NDIzMTgzODA1Igyb6SAmkkh4DwS0ackq3AOeuhvIZ31xQUaMrTTUfAMfl50zZdA0QoOSHabWL4WE6FS5DsU8ooOVkw5YJKECafumjF9BCGmHYUJ4yfLm%2FcNmoZ1ocz%2FahCBNgbT5VelGbZK9sLhlJGC6RELY4nPWxmSNDsDSwdOLDReC9XyY99huWGPPSrKG9LjeMCnmtwiqAeFdDgHlTXG06V8A%2FaxPlXiIiect3V%2BfFgLNmquqFyM9cFChYNvs0iWU8WOv19m%2Fko7WgKLmAaU9bR9DUqw8DY%2Bz%2FDL%2F%2B24e%2Bogib6wqfQBJNXuxkBQSf74fxoptW636Ly5pJUXA5nOXmhPEEuSPHWez16Ckd8j68HbHqbbndkQyafU1tXxadlLMG7h7bCO%2BvlDrnHXI0lb5Sc30nsz7asJTFssyjoMzO0P7u52YyAmdlE%2Bwa1tdAIbSDJ57eFTTSCD9DOYub2fYEYgRVO1UcjHBrD5yBFFzttcEQedmAYTkAg8u15OzCIlWMXJsa4eLiMm9A3Aiwgt64rcK1W0a5xxgNaHO2h%2BieUx9CIIjzhjtUDNbo8YmX31wPv2jEcGrZ1K7hDvYVSPglWdTfJV7R8AY2h8V%2FtOQSJW42K%2BLb6hhzRLJs7wwr9eU0In4PtiyzJjAMJpurzFwYQ8S%2FDCoxs3JBjqkASnq0bjxTdB0%2FBQAib9MoPYLA9hhG8GDC3jnga7TfdNi%2BALbY351tO7OnXTNgJ4O2qEdTmHvGAHETPILpvm78HAZ4SGaPAq2fkfF0GbyMByqmO6Y%2F7hAhzZgcUsbFErHZAray6xJqqydc7IIBncWOucoV0gYlgVkpmblJ8zdHHz%2Bjl4Mbi2Dk0%2F0%2BvgeUODZiTpakNOZADENDxSUUCbVEflQI09d&X-Amz-Signature=b4fbdd8ed0a9ef8941327ae74332bc483e6ef2081a7b7ca11dc5bf266be2fb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMGXPMO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPlEqxqdBm6ZEVz%2FRRqErt95%2FwoAwci23wP0I81S3CwgIhAPFwEXhx4Z4rM1dQxfRrattXOx%2Fu9eNABQsAVukp4zO6Kv8DCGgQABoMNjM3NDIzMTgzODA1Igyb6SAmkkh4DwS0ackq3AOeuhvIZ31xQUaMrTTUfAMfl50zZdA0QoOSHabWL4WE6FS5DsU8ooOVkw5YJKECafumjF9BCGmHYUJ4yfLm%2FcNmoZ1ocz%2FahCBNgbT5VelGbZK9sLhlJGC6RELY4nPWxmSNDsDSwdOLDReC9XyY99huWGPPSrKG9LjeMCnmtwiqAeFdDgHlTXG06V8A%2FaxPlXiIiect3V%2BfFgLNmquqFyM9cFChYNvs0iWU8WOv19m%2Fko7WgKLmAaU9bR9DUqw8DY%2Bz%2FDL%2F%2B24e%2Bogib6wqfQBJNXuxkBQSf74fxoptW636Ly5pJUXA5nOXmhPEEuSPHWez16Ckd8j68HbHqbbndkQyafU1tXxadlLMG7h7bCO%2BvlDrnHXI0lb5Sc30nsz7asJTFssyjoMzO0P7u52YyAmdlE%2Bwa1tdAIbSDJ57eFTTSCD9DOYub2fYEYgRVO1UcjHBrD5yBFFzttcEQedmAYTkAg8u15OzCIlWMXJsa4eLiMm9A3Aiwgt64rcK1W0a5xxgNaHO2h%2BieUx9CIIjzhjtUDNbo8YmX31wPv2jEcGrZ1K7hDvYVSPglWdTfJV7R8AY2h8V%2FtOQSJW42K%2BLb6hhzRLJs7wwr9eU0In4PtiyzJjAMJpurzFwYQ8S%2FDCoxs3JBjqkASnq0bjxTdB0%2FBQAib9MoPYLA9hhG8GDC3jnga7TfdNi%2BALbY351tO7OnXTNgJ4O2qEdTmHvGAHETPILpvm78HAZ4SGaPAq2fkfF0GbyMByqmO6Y%2F7hAhzZgcUsbFErHZAray6xJqqydc7IIBncWOucoV0gYlgVkpmblJ8zdHHz%2Bjl4Mbi2Dk0%2F0%2BvgeUODZiTpakNOZADENDxSUUCbVEflQI09d&X-Amz-Signature=6d999a99cf3c0476894283346b04e65026b7a7dd60b569ab19af9b10c95bf586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

