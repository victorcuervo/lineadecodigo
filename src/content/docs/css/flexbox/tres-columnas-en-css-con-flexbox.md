---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOJFTLI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdeelUkl4UgpoZGad8vCpZoaUgVC%2BLcrx4xky3MpNddAiEAjBLmh2SAU1NaIaGXDLK0VeHt%2BbVvQGGCidWHMXk7SmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFnoADYzSCVdFdOQaircA9oY4Fetmocht1Dy3sctAFknPpeueVqWpZCKWIENon6CLX7MNdGXZYeD3Hmj9D%2F%2B7%2B75j7j77yS1XIQnyuIVSmG9u8wTceJluHuT5IxfAz612aaGV7%2FOYAlOzq5r0enAwKwj29FW0j7J4OfgiyQxlK%2BDBdHYUA%2Bvh8oXijMVPOAHtltSel4FKSyG2p61U8Qa6vNv4NNWIIAcMSc9juL20B%2Bx0RVSy%2BSjziOPNG8E%2Fjx4xO60yGrGeYTupmolwci3dLdRdHwQgARx1zYQV3vR6PdF%2FUgfcqwldARMpToyszSAUheKuML3HUAYH31cUHGKm%2F5wJmoRpdUPQHbqTrkXJtHHvSGZ685KFXWJCjw9Yv3s3MGppg2lYc4fdG1ZdYoa5eYvIK%2B8t91rSBiqBU82iIfGu%2F4z31Z7HBSjfBCO6TlbH9KiXJjCsFLqmecfBxIIRwl3xV8Y%2Bc%2Br2Hu4WZu3X5mz3Mwlm80Xxeso%2BEd9mQkaCov0OWHJhWwDKs90HIOdpmLLFTPpTTytZVrFYoNklVudIIZTDuzfm43iKT%2Fz%2BKktpm0k9ZFpsVnjSsMTSUKYAa3k%2Frxf5pn089iGk9QkPk48ZK570e8VTRl1H%2FfQ09vVZWKZNpdWOKOapgSaMJ%2FQyskGOqUBR0Xd4MRPzIzi%2Bo%2B6MTKoYKrj2NurSIFHvfJ%2F3aBJqyxhApogv6kWQ5lWGdjuqxHieb1gyBlbvopw9z%2FfbW2siLcdtf7UkhxXgJdeWKumEsg%2FPJED%2BXzJnGvmAtxQx4UVQoEncymm%2BmzArYaDO8zL41hjHIjX6ogmtQFXEOOjB0%2BLbrYChNL67SIIr1zGIauaMRO7LNFriU2E6HfkXHh7so3AwIk0&X-Amz-Signature=b10ac9ffd776701e6dc282bddc901a2212fffa1acbec863899f2214e14c6cba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOJFTLI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdeelUkl4UgpoZGad8vCpZoaUgVC%2BLcrx4xky3MpNddAiEAjBLmh2SAU1NaIaGXDLK0VeHt%2BbVvQGGCidWHMXk7SmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFnoADYzSCVdFdOQaircA9oY4Fetmocht1Dy3sctAFknPpeueVqWpZCKWIENon6CLX7MNdGXZYeD3Hmj9D%2F%2B7%2B75j7j77yS1XIQnyuIVSmG9u8wTceJluHuT5IxfAz612aaGV7%2FOYAlOzq5r0enAwKwj29FW0j7J4OfgiyQxlK%2BDBdHYUA%2Bvh8oXijMVPOAHtltSel4FKSyG2p61U8Qa6vNv4NNWIIAcMSc9juL20B%2Bx0RVSy%2BSjziOPNG8E%2Fjx4xO60yGrGeYTupmolwci3dLdRdHwQgARx1zYQV3vR6PdF%2FUgfcqwldARMpToyszSAUheKuML3HUAYH31cUHGKm%2F5wJmoRpdUPQHbqTrkXJtHHvSGZ685KFXWJCjw9Yv3s3MGppg2lYc4fdG1ZdYoa5eYvIK%2B8t91rSBiqBU82iIfGu%2F4z31Z7HBSjfBCO6TlbH9KiXJjCsFLqmecfBxIIRwl3xV8Y%2Bc%2Br2Hu4WZu3X5mz3Mwlm80Xxeso%2BEd9mQkaCov0OWHJhWwDKs90HIOdpmLLFTPpTTytZVrFYoNklVudIIZTDuzfm43iKT%2Fz%2BKktpm0k9ZFpsVnjSsMTSUKYAa3k%2Frxf5pn089iGk9QkPk48ZK570e8VTRl1H%2FfQ09vVZWKZNpdWOKOapgSaMJ%2FQyskGOqUBR0Xd4MRPzIzi%2Bo%2B6MTKoYKrj2NurSIFHvfJ%2F3aBJqyxhApogv6kWQ5lWGdjuqxHieb1gyBlbvopw9z%2FfbW2siLcdtf7UkhxXgJdeWKumEsg%2FPJED%2BXzJnGvmAtxQx4UVQoEncymm%2BmzArYaDO8zL41hjHIjX6ogmtQFXEOOjB0%2BLbrYChNL67SIIr1zGIauaMRO7LNFriU2E6HfkXHh7so3AwIk0&X-Amz-Signature=54a95912cc0dae29b678e320212764a191b2986c3d40b8bb8354ee8eacb381e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

