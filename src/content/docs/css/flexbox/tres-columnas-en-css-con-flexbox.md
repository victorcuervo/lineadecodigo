---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFVS7FX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKOG1YXIy5lZbz34NYTS0zHyRgM%2FFDsHhVwshWCt8xYwIhAPzzCLo9fDfDBO2PW2L%2FWNx0JS1Cq59%2B3qHm%2FRjKIyS%2BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlLW%2BcNTTNhGu94Ocq3AMsMFzo1PI21jCryTEB1BjAGo4zcz2ajax40eFBzD1BzW5Jx2gQZnIuZ9kvrY3l4kwf2Hn%2FvWbD%2BG4HH4tusepXHM0l4FZVxXnripjT6dSEu5%2BIPulMcqycYhVkw1Hzu%2FgPySDsjWNWuoioM0tudRDCfKVd2qpX0dMGROZRtarYLzcJIfZ6NaSHuKa%2BOtJ3yTCvUqfmKp4Qw1Hln%2F7%2FmFLEmqIak2fHpTodz3ojy31uULwGtgqxA1fPbUtKjBSpriG%2B06hQlscuE3huLt38dbEQwaIQCWSXUZcOoiwMfN1L4ePYm2w2s3PZz5JDVs6kFshWx9tfyCxqeBSStqWToVZZirVEDpIefPIlAfm1DnmCXVr0%2FGGpJ%2FkMclgv4apR316LGwW%2FMmRT72KBCpsPTy2ssLDnNEOnm7v%2FEVaRY9lLxa4wSMC9i%2BXexJ5noLTo9IgDT0qRpFcRN1DUV1u066YpbbCoP70SabNTuwZMeLLv5P6tbtVn33R9zQcv4I%2FJJ882ikTQyWsNq0s%2B%2F5HQZoAHCE4OmAYKhfiCZyODz%2Fx09%2FI%2F3Q0GhILSI8q%2FSC6dZj8oQn5ei3wA8GJpbGVeZztxaT1wxCUFSidYoH%2BABGE8wH%2F3vABI1TwgCPXdFTDqyd7JBjqkAQ2oS2%2Fr%2BSocv58aNdoYwNC79Xr%2BYXEI70FMjVo8Z73fHvvSX8brybLCm%2BVzhIuQgqSixwNRHhkPxEJDdbTSy%2BFcBN5MUs9YqyIGrhmK%2FnEUybJc%2BikVNZ2tVbIqLreYjDs2Tb8Ur6V%2BX4Hhw60k5e%2BhDNpcxdj4SDxr4oERbSSNhf5Q1C%2FVq7s07grRVaMNVSN5ez4pSrQdQRBiWLGxk9bZiNiR&X-Amz-Signature=d6924563d8566bbf0248e9827f5a88d738782e7de4f84b9aeeb2101e5d666603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFVS7FX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKOG1YXIy5lZbz34NYTS0zHyRgM%2FFDsHhVwshWCt8xYwIhAPzzCLo9fDfDBO2PW2L%2FWNx0JS1Cq59%2B3qHm%2FRjKIyS%2BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlLW%2BcNTTNhGu94Ocq3AMsMFzo1PI21jCryTEB1BjAGo4zcz2ajax40eFBzD1BzW5Jx2gQZnIuZ9kvrY3l4kwf2Hn%2FvWbD%2BG4HH4tusepXHM0l4FZVxXnripjT6dSEu5%2BIPulMcqycYhVkw1Hzu%2FgPySDsjWNWuoioM0tudRDCfKVd2qpX0dMGROZRtarYLzcJIfZ6NaSHuKa%2BOtJ3yTCvUqfmKp4Qw1Hln%2F7%2FmFLEmqIak2fHpTodz3ojy31uULwGtgqxA1fPbUtKjBSpriG%2B06hQlscuE3huLt38dbEQwaIQCWSXUZcOoiwMfN1L4ePYm2w2s3PZz5JDVs6kFshWx9tfyCxqeBSStqWToVZZirVEDpIefPIlAfm1DnmCXVr0%2FGGpJ%2FkMclgv4apR316LGwW%2FMmRT72KBCpsPTy2ssLDnNEOnm7v%2FEVaRY9lLxa4wSMC9i%2BXexJ5noLTo9IgDT0qRpFcRN1DUV1u066YpbbCoP70SabNTuwZMeLLv5P6tbtVn33R9zQcv4I%2FJJ882ikTQyWsNq0s%2B%2F5HQZoAHCE4OmAYKhfiCZyODz%2Fx09%2FI%2F3Q0GhILSI8q%2FSC6dZj8oQn5ei3wA8GJpbGVeZztxaT1wxCUFSidYoH%2BABGE8wH%2F3vABI1TwgCPXdFTDqyd7JBjqkAQ2oS2%2Fr%2BSocv58aNdoYwNC79Xr%2BYXEI70FMjVo8Z73fHvvSX8brybLCm%2BVzhIuQgqSixwNRHhkPxEJDdbTSy%2BFcBN5MUs9YqyIGrhmK%2FnEUybJc%2BikVNZ2tVbIqLreYjDs2Tb8Ur6V%2BX4Hhw60k5e%2BhDNpcxdj4SDxr4oERbSSNhf5Q1C%2FVq7s07grRVaMNVSN5ez4pSrQdQRBiWLGxk9bZiNiR&X-Amz-Signature=b3aae2b3b139dad9884412127666fcc3f72d26b0cae78390addc1c9927eb51b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

