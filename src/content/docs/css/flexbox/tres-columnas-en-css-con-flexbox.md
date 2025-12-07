---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHETJEN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCESNk%2BtBlip1GoRp0PUwfqhuZR9cnLEzgZt1K0ELPk3AIhAJuOkR%2Fm06fexdlJXxBxh2W6aa1tDr7sc4WEGEwXLqMjKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhxzdc%2FW5w%2BV%2FYBkgq3APUQxqE9y%2FDj7HSL7EvvhXklnSGvguFSohE8R70SPW%2B6OpZKQp713yq4Dyv2tm5ADZeGpsPZ8RARkQDHtho4ifsX644%2Fypyt8mXRB%2FDgUa8YNyZaVzEK97N9lK3GfMpbkUQrLhlEF%2BSMi3iiN%2FELAYsCegVRTapnNwgmCi%2Fy%2FyljNitM4wwN5bkkbsGpXJ3qdU5QRKXWD2HPvYwAmBBOG7MBpVKGEFGwNsAuTeUhC6TbwJKGYs6WFasoT4tblECPPxxqQxe94D0ME0zeErY491F05T2ZCXyolEFeQvqNhhLTmOw1KUhY7p02eZG06huOLRnRoi%2F1XkaKZ8a0Ln%2FsNjM9FA8oa3OV%2FJf72F8cQzbA96zEh8lWTVV8xQeVE6lS1A5AFNsMRwyD5IiAct5rlZMMkPmpGb%2BS%2Boh%2BeEUElayVOk%2BLQZxyOEm6rRUTh5HA3MYgFhQ3eEy6PJNM7x4FMCScPCG08bcfNZQUiMo4LUYkUrqWe9p5nhQG0lNEMSRug%2FGzZNjQ4a1sGfJ%2Fb1hS4xpJ5PcCwk75R%2B0aMOh4sI7EEZ0YoazhSVeRkPh8njE0DSCmdK2TmW813noZwpcrCorynI3IfQd1VA2hWQ5x8J6thmPPYXITfLpexxO5TDvt9bJBjqkARKE723f%2ByUoj7TjZi5SiU9DGi7m71Ub2Y7M%2F%2BbAKZnMxJLAuoVW0ibyjEfuhSm4IdtwpkbWQSfwRGlLjU%2BEWhVlhkPUkid6klXU8NTJAg2kA7OcCL%2FcZXAfqBlJJ8S%2BCEfitxGpA%2B5ic7EfAfQnBjbndIW2enVqlB%2FfF10sHTcxYy7%2F%2FAeED3xYvaaURX%2BrTtGX7a0ITAW3RWfWAcldMNBfjODj&X-Amz-Signature=120b152937c9a7492f34e19f2cec8cd8665393d6e7684eb3c8a4f5066fc32677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHETJEN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCESNk%2BtBlip1GoRp0PUwfqhuZR9cnLEzgZt1K0ELPk3AIhAJuOkR%2Fm06fexdlJXxBxh2W6aa1tDr7sc4WEGEwXLqMjKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhxzdc%2FW5w%2BV%2FYBkgq3APUQxqE9y%2FDj7HSL7EvvhXklnSGvguFSohE8R70SPW%2B6OpZKQp713yq4Dyv2tm5ADZeGpsPZ8RARkQDHtho4ifsX644%2Fypyt8mXRB%2FDgUa8YNyZaVzEK97N9lK3GfMpbkUQrLhlEF%2BSMi3iiN%2FELAYsCegVRTapnNwgmCi%2Fy%2FyljNitM4wwN5bkkbsGpXJ3qdU5QRKXWD2HPvYwAmBBOG7MBpVKGEFGwNsAuTeUhC6TbwJKGYs6WFasoT4tblECPPxxqQxe94D0ME0zeErY491F05T2ZCXyolEFeQvqNhhLTmOw1KUhY7p02eZG06huOLRnRoi%2F1XkaKZ8a0Ln%2FsNjM9FA8oa3OV%2FJf72F8cQzbA96zEh8lWTVV8xQeVE6lS1A5AFNsMRwyD5IiAct5rlZMMkPmpGb%2BS%2Boh%2BeEUElayVOk%2BLQZxyOEm6rRUTh5HA3MYgFhQ3eEy6PJNM7x4FMCScPCG08bcfNZQUiMo4LUYkUrqWe9p5nhQG0lNEMSRug%2FGzZNjQ4a1sGfJ%2Fb1hS4xpJ5PcCwk75R%2B0aMOh4sI7EEZ0YoazhSVeRkPh8njE0DSCmdK2TmW813noZwpcrCorynI3IfQd1VA2hWQ5x8J6thmPPYXITfLpexxO5TDvt9bJBjqkARKE723f%2ByUoj7TjZi5SiU9DGi7m71Ub2Y7M%2F%2BbAKZnMxJLAuoVW0ibyjEfuhSm4IdtwpkbWQSfwRGlLjU%2BEWhVlhkPUkid6klXU8NTJAg2kA7OcCL%2FcZXAfqBlJJ8S%2BCEfitxGpA%2B5ic7EfAfQnBjbndIW2enVqlB%2FfF10sHTcxYy7%2F%2FAeED3xYvaaURX%2BrTtGX7a0ITAW3RWfWAcldMNBfjODj&X-Amz-Signature=1703ca1ad3df286f6ecbcf43c895fac05cbe55b9082b1cdc1125d13eb5d49887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

