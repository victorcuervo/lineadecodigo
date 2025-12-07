---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJIBG2Y7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrClZtViiIsLXA2Dxx83yLlWSdpJI%2BBCNbrvFiibgeYQIhAO40o1x8P9QOE9SqAdbGZOax%2FoIaE6KbBMSjrUsZgkZXKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9FncC1nVmMgmUab8q3ANXFjYhMbz91hj%2BKyaUvPODa7eXt947kGCqjeJ%2FoKLrp4xC%2FBwEgYhcurDJpkRpRDzVWNR3ZW3nXfgqJ%2BqSXckGj2kHhcQLKMgutj8IkGpIDPzfGQK9ptmRSwJZUOhG2bfSO%2BtPMy9IFcCU6F9DAhnOgaT5SRigngSsJKtUIpFMjvlyPcguNY2t9bG5Dl6IfG3KAtMCNVjGDN%2B644rxXxzqm6XthHEPFoo8goT6c%2BHDrqS2e%2B9z%2BhnfymTeXqRHtFUyRPn6up1mmn7xwO20yMPDRwIA36mmANmso662d6Tudc%2BbJHRGZyoXhjEpuE8y0EOUJ4pKEARCTeEDd2U%2F5NTI0tBPOHI5YIB4d3X7IdJAiuL5yEVouxbYpe8isetRECHIs9hNRX6N1N0dxwMku1wMcUF1Lxg7jDKRsWOW%2BJo4C19Nc31BUxDU%2FpTyfvRlXnnTHnRVgIVmm7ecXuZuZzBv2w0CJJdkIG9f6a9XwH1QT8dXOpYlyxl4u9ikKVGU6o%2FYMxsDsi5%2FSnL3OFRbD3QRutYE2PaEYIdamv4dyoEqEMURqQBiSIuHwghg5UR7Gbi0l5ciiTFk2sdxzBPz7vCCBYDIJIdgVOKL%2B8%2FYOh9u1pLAGbbaN%2BYCOlBSTTC%2FhdjJBjqkAfOEi8%2FzfK%2Fl79SrNlCDCL50RYTHNS7%2BuZiHDrj9b%2F4g7yrY%2BAlhb2IVuiY1gSuHj2WjsC%2F4MMcAkjY0PGV1uoI3QaUI5z13nFoNLpLwdByBxBJ8KFROnzuQ4FiR9kFnkZ2NJPn%2BbL3kHJBdCQQyP08PquBrJaRRho3rN4%2FO5sLu5bSxh9WZsgnzExTKWKLdpfjDCLKSrwo7XTUS9GeZBx%2BjhbaA&X-Amz-Signature=b21afc03a065f3945d09f21c24b7f44d152fb77e2cd2f70cecb949dd460099a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJIBG2Y7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrClZtViiIsLXA2Dxx83yLlWSdpJI%2BBCNbrvFiibgeYQIhAO40o1x8P9QOE9SqAdbGZOax%2FoIaE6KbBMSjrUsZgkZXKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9FncC1nVmMgmUab8q3ANXFjYhMbz91hj%2BKyaUvPODa7eXt947kGCqjeJ%2FoKLrp4xC%2FBwEgYhcurDJpkRpRDzVWNR3ZW3nXfgqJ%2BqSXckGj2kHhcQLKMgutj8IkGpIDPzfGQK9ptmRSwJZUOhG2bfSO%2BtPMy9IFcCU6F9DAhnOgaT5SRigngSsJKtUIpFMjvlyPcguNY2t9bG5Dl6IfG3KAtMCNVjGDN%2B644rxXxzqm6XthHEPFoo8goT6c%2BHDrqS2e%2B9z%2BhnfymTeXqRHtFUyRPn6up1mmn7xwO20yMPDRwIA36mmANmso662d6Tudc%2BbJHRGZyoXhjEpuE8y0EOUJ4pKEARCTeEDd2U%2F5NTI0tBPOHI5YIB4d3X7IdJAiuL5yEVouxbYpe8isetRECHIs9hNRX6N1N0dxwMku1wMcUF1Lxg7jDKRsWOW%2BJo4C19Nc31BUxDU%2FpTyfvRlXnnTHnRVgIVmm7ecXuZuZzBv2w0CJJdkIG9f6a9XwH1QT8dXOpYlyxl4u9ikKVGU6o%2FYMxsDsi5%2FSnL3OFRbD3QRutYE2PaEYIdamv4dyoEqEMURqQBiSIuHwghg5UR7Gbi0l5ciiTFk2sdxzBPz7vCCBYDIJIdgVOKL%2B8%2FYOh9u1pLAGbbaN%2BYCOlBSTTC%2FhdjJBjqkAfOEi8%2FzfK%2Fl79SrNlCDCL50RYTHNS7%2BuZiHDrj9b%2F4g7yrY%2BAlhb2IVuiY1gSuHj2WjsC%2F4MMcAkjY0PGV1uoI3QaUI5z13nFoNLpLwdByBxBJ8KFROnzuQ4FiR9kFnkZ2NJPn%2BbL3kHJBdCQQyP08PquBrJaRRho3rN4%2FO5sLu5bSxh9WZsgnzExTKWKLdpfjDCLKSrwo7XTUS9GeZBx%2BjhbaA&X-Amz-Signature=cfd54cc184c4c6e157f4ad57a6ed734f0be03e5c84f3a133a623bc873965749e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

