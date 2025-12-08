---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD6XQJCO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiBE5Za9AT4Hw0HaFS83%2F4wGJ89HZP33CfyvorMjANjQIhAMy6zs1VwA4ljXFrPFnJHzICgtaU1YUTnSXO0wkbs97IKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXznW%2FrDCiDUBpwyIq3ANUrj1nYAmlllBPgiY3BrvWbRxfyDRXD2K3GS%2Bj9CZbxbCfmjeEIYdYJ3LFfCMwBjJEZPA5D%2BUeUXbCYIe1jcuxcVEoUpebqlpnVDE4gLM1BxuoBIjYDcv%2FOURPArYeVGUNKtt3awH7tjwGeO98q%2F%2Ff6pEGQ7bNW73CxRB8YkS%2BShqBrOfy7k1snCbZqSeGfYDsC2uMdE0VcdoiQA2d%2B3iuileCl6UMBpyfQ60eV3dd5tdDBTC9fq78w0G4k5wGabWA2lmFZTTDtgi%2FZQcIIhyBk4nLcy3EuGbvOJpxJwzHsO6jDvKWu7p5t8KDI%2Bxmftqh4DK0N3LmB2l6V82tOFUY4seHO781xHWgIoPTitOptUuWde0Zgi6pqWxxfu%2F4HNhyMZuEAKQyp%2F1%2Btv9sLf74u3HRarf5o%2FfgVcE2zc93zUMDn7Ga%2FsfgJJqOpLLxpeFPMmhepMgzXUjUKQ71kqXuJ77d4En1v%2B9nQ4zZgVrgYYvR0In7MLDyTXZCvyRY5FE3Om12ljdTqaw90wyDwDO2HtyFI9bSnzIHFViUI791q1LPa36z3kVH1JmHm6FxCyqCxdWTTG8pCLhwpcm6Vy9Vx3D0%2B9NlNeDyhwFD%2BtvObYUcAdtUINyBt6L9GDCO7tjJBjqkAfR5dkimyf2Wv4bfzXH3G4rnq4WfxLGPvkcTmLljgK4q8Tk01BKbBYXeyUaqsaG3PaiLVz4T9g%2FuRIrL9EVdO43qiNcStw9TVE6DamfFTKm6or1hu8FMtNQHz4gw0WIYK%2F4g9kUhTqwOOQEGCiU2Hqhl5KzC8JQIXxU2UvQX7EvUFoET80rY%2Fr6FmsoKQ%2Fc3Y2OXED98qbws%2BhMaEYt0nsoZn4Qj&X-Amz-Signature=524228ad4c8aee81c3140d6a115e8ccf892321c07e9043c662cd12d7c3040b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD6XQJCO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiBE5Za9AT4Hw0HaFS83%2F4wGJ89HZP33CfyvorMjANjQIhAMy6zs1VwA4ljXFrPFnJHzICgtaU1YUTnSXO0wkbs97IKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXznW%2FrDCiDUBpwyIq3ANUrj1nYAmlllBPgiY3BrvWbRxfyDRXD2K3GS%2Bj9CZbxbCfmjeEIYdYJ3LFfCMwBjJEZPA5D%2BUeUXbCYIe1jcuxcVEoUpebqlpnVDE4gLM1BxuoBIjYDcv%2FOURPArYeVGUNKtt3awH7tjwGeO98q%2F%2Ff6pEGQ7bNW73CxRB8YkS%2BShqBrOfy7k1snCbZqSeGfYDsC2uMdE0VcdoiQA2d%2B3iuileCl6UMBpyfQ60eV3dd5tdDBTC9fq78w0G4k5wGabWA2lmFZTTDtgi%2FZQcIIhyBk4nLcy3EuGbvOJpxJwzHsO6jDvKWu7p5t8KDI%2Bxmftqh4DK0N3LmB2l6V82tOFUY4seHO781xHWgIoPTitOptUuWde0Zgi6pqWxxfu%2F4HNhyMZuEAKQyp%2F1%2Btv9sLf74u3HRarf5o%2FfgVcE2zc93zUMDn7Ga%2FsfgJJqOpLLxpeFPMmhepMgzXUjUKQ71kqXuJ77d4En1v%2B9nQ4zZgVrgYYvR0In7MLDyTXZCvyRY5FE3Om12ljdTqaw90wyDwDO2HtyFI9bSnzIHFViUI791q1LPa36z3kVH1JmHm6FxCyqCxdWTTG8pCLhwpcm6Vy9Vx3D0%2B9NlNeDyhwFD%2BtvObYUcAdtUINyBt6L9GDCO7tjJBjqkAfR5dkimyf2Wv4bfzXH3G4rnq4WfxLGPvkcTmLljgK4q8Tk01BKbBYXeyUaqsaG3PaiLVz4T9g%2FuRIrL9EVdO43qiNcStw9TVE6DamfFTKm6or1hu8FMtNQHz4gw0WIYK%2F4g9kUhTqwOOQEGCiU2Hqhl5KzC8JQIXxU2UvQX7EvUFoET80rY%2Fr6FmsoKQ%2Fc3Y2OXED98qbws%2BhMaEYt0nsoZn4Qj&X-Amz-Signature=f90eb45dcb5abc090b7e1c666031950adaaddb36ae73e08276aa2c0e2719725f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

