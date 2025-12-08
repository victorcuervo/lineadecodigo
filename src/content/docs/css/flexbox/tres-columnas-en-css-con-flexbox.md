---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ3HINHJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT5k0U%2FDY%2BWTEU96Zj%2F4xwh38guxgkRGl0rfo8q6CnkAiBxC8B1FQ47%2FjgjX6w%2BxIAVdJQekEJeow2lRMfVZZxDSyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqmA4AMALwMFcjLWOKtwD77r%2FyoNUjKB4ldjmGmrB1%2F3R0aUPt%2BmMv754dd76Yd10zDFu9s%2B0BL6IpgnJnjRiZeqqfW4ySBnwjHOMx2Ov%2FEbshsvIgqRTcz07n7Bpwi1zVkk6tw4jLC2E4V0k82V5jnYT8oyeQ31Hcb7kfvCQnaHkXdiF9JbNV5E2ofWT7gFAhbGVrxMLHrx%2BtTDjcSzhOocPmaxJh886dRm8DFZpzpEJvJLcAYzENSmMV2j%2BzX%2B6MKEs5tUMAvCW19ux7LK3lbjPiYI2LUCYxNd0AX9699YkKvCB8zywUKTFi9utogPvfDGFRXiOghKPLZ8tfIz26oIKv%2Fsej3ligXUPIGRBaqYoJxo%2BKmX9VTrWy41pVerm0UMTtYaW%2BN0%2BfPzZWdGT%2F6fOsdDfD%2Fi%2FoKVSIZlMsOi3iELYlCECV5B52j4q%2Fvme3zXI28oqXpjvhfYpkNObtYskKnCb9oASUwfuyoRekdPfBEMR4m%2FYUAm6gybNv5rpKjG9xjfQiNq9HmAd%2FS6RBgTPRbup19sWA%2BanEhTyqzwlM7EoSs7eLZltw4dtc3ickh6cLp2QKqIsXWe%2F1%2B9qLMdkfbPEA3HwCfUD6zJsGQMYaMN4VS3FnrclInla88PjM0um7oapTzzltxAwupDbyQY6pgGa70HlcjyyA3eHrPtOM7eItcLDsGVF3AJgsnh2vViYSvcFqExstR6iCTqpyOkJuzNy0ydkgnDqqXfbgMrPARcz%2FJznVVJaUOI5a12JfJPDjlJ%2BU9RIZ9x7UPO7Xhc62nJG5hnkECyjD2WoXr7hNUQ3JNiEbMbQkKXDbAJLFU1oc%2BbKdsDeByLLW9TDkJdp6Gi6KPi5ZE57%2FBKuYJGUxqgq%2FTX4LQ9W&X-Amz-Signature=68ec807c7a5de42502c16a46e509eeb56ccafcd247b97e8bd99bc9b9f6644ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ3HINHJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT5k0U%2FDY%2BWTEU96Zj%2F4xwh38guxgkRGl0rfo8q6CnkAiBxC8B1FQ47%2FjgjX6w%2BxIAVdJQekEJeow2lRMfVZZxDSyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqmA4AMALwMFcjLWOKtwD77r%2FyoNUjKB4ldjmGmrB1%2F3R0aUPt%2BmMv754dd76Yd10zDFu9s%2B0BL6IpgnJnjRiZeqqfW4ySBnwjHOMx2Ov%2FEbshsvIgqRTcz07n7Bpwi1zVkk6tw4jLC2E4V0k82V5jnYT8oyeQ31Hcb7kfvCQnaHkXdiF9JbNV5E2ofWT7gFAhbGVrxMLHrx%2BtTDjcSzhOocPmaxJh886dRm8DFZpzpEJvJLcAYzENSmMV2j%2BzX%2B6MKEs5tUMAvCW19ux7LK3lbjPiYI2LUCYxNd0AX9699YkKvCB8zywUKTFi9utogPvfDGFRXiOghKPLZ8tfIz26oIKv%2Fsej3ligXUPIGRBaqYoJxo%2BKmX9VTrWy41pVerm0UMTtYaW%2BN0%2BfPzZWdGT%2F6fOsdDfD%2Fi%2FoKVSIZlMsOi3iELYlCECV5B52j4q%2Fvme3zXI28oqXpjvhfYpkNObtYskKnCb9oASUwfuyoRekdPfBEMR4m%2FYUAm6gybNv5rpKjG9xjfQiNq9HmAd%2FS6RBgTPRbup19sWA%2BanEhTyqzwlM7EoSs7eLZltw4dtc3ickh6cLp2QKqIsXWe%2F1%2B9qLMdkfbPEA3HwCfUD6zJsGQMYaMN4VS3FnrclInla88PjM0um7oapTzzltxAwupDbyQY6pgGa70HlcjyyA3eHrPtOM7eItcLDsGVF3AJgsnh2vViYSvcFqExstR6iCTqpyOkJuzNy0ydkgnDqqXfbgMrPARcz%2FJznVVJaUOI5a12JfJPDjlJ%2BU9RIZ9x7UPO7Xhc62nJG5hnkECyjD2WoXr7hNUQ3JNiEbMbQkKXDbAJLFU1oc%2BbKdsDeByLLW9TDkJdp6Gi6KPi5ZE57%2FBKuYJGUxqgq%2FTX4LQ9W&X-Amz-Signature=f1cfa33ae998d7aaa8d7022ab5b52fd3bdad1e421d71f2e3cb5177ba8c8c1d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

