---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU2PXBDA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWZjpa5g7yBSoS3AGUCJmIz99fLHVtFSrOjxvbtXseBAIgFd7qU9TBoSJffQKmINZ59Yx61g56eZei92SPiCvNu6Iq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNUUeI3FbOI0QmB4jircA7Z1xaLJBmjNKqj6MgldZNWrutogUCENAGH1654Ak5Yseo8n8Ebo7yPBZXlDke8JKDMN4SULgvZF0B%2FZcLaCTQxyNfbSebWQAAc056ZOBIEJCf1fAJ%2BcFPSjTHCG%2FFCCoBfSqWjWjuG3JuhpdRRjUIGj9xMw6mFiSDokemA1mmBe2q%2FfWwDIaInj%2FVhwqCazjJgzOeRvE1SfeLMBOdk2qgE0RFvhjrlwOmarmiey4SghzG9zfVDym6BMTfxXaBowIqfRvfauxg%2Fz0CKVG1RawbyI0g3W0w9vYMCtfT99bd%2Fel9OpZJmBxqNQ5WEDOrZDoKYKmTpL1RNqBExGDrq9SJPZ1lada3y%2F4mQzPlzSmE89H%2BFecdtKoULBT8Zjc%2FI%2FW%2Bdeiagf5DqfFyUwwP5VTEyCSyPxzwcFQvjBxNIWa2O%2F%2B5EZKEfVr72s%2FuG%2BkxteXslCzwCm%2BvPI8EveEK%2F7azqyyYKDqp92uNjPnygGs8trZDWE70fac8NQr%2BswI40unhMMQJuCsJ6xVHNG60Rfwk9qqimiNciVcDsxhtM50hGhI8eDJk%2BBoCda8UJBNlibFEMgmcleEGB4NQGPbTT2U%2Fk0nYTammHgG%2BZf6QGYVP3GvEn7zcvaMy1U3XuPMJSozskGOqUB3Lh7Ol%2FOptu%2BPsm%2Fuzijvk4TRUZEmk6SxvKBeDYTBqUvlNomy69KpXBdfCrosW7LaS0c5sW%2BDALJMX3Pu%2BxU0MS5xtj2ZLoxbvQc1BlMCDmAI9d%2FStXPJaFrhdc3NvUqV87%2FUzCvyM%2BV0K0knJ0THUfkZpKzATqpT5OsGkp3zf%2FkIcQcHUBUJK4uVP%2FJoS7Ocl5N53DkfPAgVYIajxl%2FAwdWQBgQ&X-Amz-Signature=86d1a84395e2c14f058e9eb238065f5cb56d01f4e947015edfcf2325be93e4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU2PXBDA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWZjpa5g7yBSoS3AGUCJmIz99fLHVtFSrOjxvbtXseBAIgFd7qU9TBoSJffQKmINZ59Yx61g56eZei92SPiCvNu6Iq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNUUeI3FbOI0QmB4jircA7Z1xaLJBmjNKqj6MgldZNWrutogUCENAGH1654Ak5Yseo8n8Ebo7yPBZXlDke8JKDMN4SULgvZF0B%2FZcLaCTQxyNfbSebWQAAc056ZOBIEJCf1fAJ%2BcFPSjTHCG%2FFCCoBfSqWjWjuG3JuhpdRRjUIGj9xMw6mFiSDokemA1mmBe2q%2FfWwDIaInj%2FVhwqCazjJgzOeRvE1SfeLMBOdk2qgE0RFvhjrlwOmarmiey4SghzG9zfVDym6BMTfxXaBowIqfRvfauxg%2Fz0CKVG1RawbyI0g3W0w9vYMCtfT99bd%2Fel9OpZJmBxqNQ5WEDOrZDoKYKmTpL1RNqBExGDrq9SJPZ1lada3y%2F4mQzPlzSmE89H%2BFecdtKoULBT8Zjc%2FI%2FW%2Bdeiagf5DqfFyUwwP5VTEyCSyPxzwcFQvjBxNIWa2O%2F%2B5EZKEfVr72s%2FuG%2BkxteXslCzwCm%2BvPI8EveEK%2F7azqyyYKDqp92uNjPnygGs8trZDWE70fac8NQr%2BswI40unhMMQJuCsJ6xVHNG60Rfwk9qqimiNciVcDsxhtM50hGhI8eDJk%2BBoCda8UJBNlibFEMgmcleEGB4NQGPbTT2U%2Fk0nYTammHgG%2BZf6QGYVP3GvEn7zcvaMy1U3XuPMJSozskGOqUB3Lh7Ol%2FOptu%2BPsm%2Fuzijvk4TRUZEmk6SxvKBeDYTBqUvlNomy69KpXBdfCrosW7LaS0c5sW%2BDALJMX3Pu%2BxU0MS5xtj2ZLoxbvQc1BlMCDmAI9d%2FStXPJaFrhdc3NvUqV87%2FUzCvyM%2BV0K0knJ0THUfkZpKzATqpT5OsGkp3zf%2FkIcQcHUBUJK4uVP%2FJoS7Ocl5N53DkfPAgVYIajxl%2FAwdWQBgQ&X-Amz-Signature=5a8ce3b81dce37cd7bd67ab37d64984a81ed73c96255111718462674f807cadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

