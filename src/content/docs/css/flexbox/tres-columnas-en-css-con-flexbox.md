---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KYJMPU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfoKqSZr2TUUQHQIbElivL2fA47c8T9YnvdyeXrJO89AiEA7W6%2Bkvs7kyeAwxiyaPJOU1dwxP5g6JLlq%2Fl2FKhChCgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoSKuXswCkZQKbIwSrcA1hSmq%2B838koWCQinKTZb1DNNBNemwarr2uU9jAsSSFshxDxlQeDItA%2FabbDX1sPkUVMlDIWdVzLfNHVqq29oXEBfEozhowpHkP9CwG2LocN6WUGnPO33AOUtemp8E%2B1o7pXbyRQ9tLcx0%2BivG2f7rZTCS6%2BJ8ipdcEKpDywmh34r%2B6s4EBVFSIheh3caNT1LKt0QCYZS20lLsrq%2BrizVVUaJf%2F9IEqdnXRMwkyL8aqSsNdS99XeG1plX8RR7b6hZsgJQ0TLnzbDij0b776eylMA4oIB4kN4zIE12S7dnRj2qBTieDqazn6KhWio9zz6Un3AWBhHIov%2Fuj%2BlDSbEzWZwzYF9PAKKsKhhSdCBbbt2kIT0gORyECx6mB5Ua9OCm64PriIw1Z5qC7KAsdhNi%2BLsozZvjRJy5ezDSjPoYKo6jw%2FLUffZVZty3M3t4Evl9AWp%2FsRBiRFxmeLhKCQwVgFiaSyNamhSNQW%2FWML6%2FCoZbQtmUAdPCLo3vQnhoaivujelN%2F0agtjxJDx2C4CoPsqPkywxawUzBvORjGBFi98Qx4uYXDnYmGzkCOoPKMguyHyzCRj99fJjSQvwBwAty0zWAdkAm94UekM0x8THEavnMY4DtW7aNyS3JYabMLPp3ckGOqUBgkzLNd6WFldalDqHGWJyMIGzvqwdpdOm3Oo0D2TlF47UJ9WR5zHKfDsrVmMKDnuYQk261nHyJLntxP%2BQE0ernb%2FaP8lhmH6fJcTmPhTJz4QtU5ExObJeY56bSNOB9tAIKqomraP0yVNjk4kV2ovAT7rfARiXDfoCvAs5IgSmgZVTfIsadF4%2BLUiIpegrrpPtYFnBxcVJ9SB7TS8%2BCxPLFdIhKNO%2B&X-Amz-Signature=3b171cb4b7fe59b662fdfbe39c93df91b10eb471ba3741db7315980df7d8c20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KYJMPU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfoKqSZr2TUUQHQIbElivL2fA47c8T9YnvdyeXrJO89AiEA7W6%2Bkvs7kyeAwxiyaPJOU1dwxP5g6JLlq%2Fl2FKhChCgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoSKuXswCkZQKbIwSrcA1hSmq%2B838koWCQinKTZb1DNNBNemwarr2uU9jAsSSFshxDxlQeDItA%2FabbDX1sPkUVMlDIWdVzLfNHVqq29oXEBfEozhowpHkP9CwG2LocN6WUGnPO33AOUtemp8E%2B1o7pXbyRQ9tLcx0%2BivG2f7rZTCS6%2BJ8ipdcEKpDywmh34r%2B6s4EBVFSIheh3caNT1LKt0QCYZS20lLsrq%2BrizVVUaJf%2F9IEqdnXRMwkyL8aqSsNdS99XeG1plX8RR7b6hZsgJQ0TLnzbDij0b776eylMA4oIB4kN4zIE12S7dnRj2qBTieDqazn6KhWio9zz6Un3AWBhHIov%2Fuj%2BlDSbEzWZwzYF9PAKKsKhhSdCBbbt2kIT0gORyECx6mB5Ua9OCm64PriIw1Z5qC7KAsdhNi%2BLsozZvjRJy5ezDSjPoYKo6jw%2FLUffZVZty3M3t4Evl9AWp%2FsRBiRFxmeLhKCQwVgFiaSyNamhSNQW%2FWML6%2FCoZbQtmUAdPCLo3vQnhoaivujelN%2F0agtjxJDx2C4CoPsqPkywxawUzBvORjGBFi98Qx4uYXDnYmGzkCOoPKMguyHyzCRj99fJjSQvwBwAty0zWAdkAm94UekM0x8THEavnMY4DtW7aNyS3JYabMLPp3ckGOqUBgkzLNd6WFldalDqHGWJyMIGzvqwdpdOm3Oo0D2TlF47UJ9WR5zHKfDsrVmMKDnuYQk261nHyJLntxP%2BQE0ernb%2FaP8lhmH6fJcTmPhTJz4QtU5ExObJeY56bSNOB9tAIKqomraP0yVNjk4kV2ovAT7rfARiXDfoCvAs5IgSmgZVTfIsadF4%2BLUiIpegrrpPtYFnBxcVJ9SB7TS8%2BCxPLFdIhKNO%2B&X-Amz-Signature=18d3ef2866de74c38065f386f25b9d49de97f1efe17506d0db3e2a545c373da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

