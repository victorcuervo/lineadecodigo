---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGOLTR77%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYy5T84v%2B9iMOyoAed%2FWuqZR5iizBH7j4r4Y20FxdtwgIhAM6f%2BNKw2wehZdtGtUF9J16eQB8OLB5xySNjRQbspe8OKv8DCFoQABoMNjM3NDIzMTgzODA1IgzofpjMVSc7M%2F4Cbtoq3AMn675pufpz3LZopghWIAJDbkcD1G%2F8LLyckeAfUhTLJuc%2B0Frla0Fqr%2B0LrAP8haxCpStnc6SFDLkNTcifFQBtxpPFMVWeQ5E%2FMIXEztxrvl%2B0qyoOTELaSfffAvSLVZ65gKPwCHYlo8RbZeHisxpt3a3INkSqvWhlA5PvmUp9xiBRK6PxbwACKN%2Fqki5vNeDbtw7vT3VYg6zFpZiUiYBDzejmnT0lLfSA2P8N9QtBwFu%2BDPF8gmHqDaMUd4v4VVP%2FJ3RqB3%2BokWsrqHvAqM1VJAsvOf6G5LcfewrbgUsbrlAU9dW2ArdLHGlCrz37nmBjyXDy3Z6iFXia6OtIXHrEPBPX3N2L5rl%2BiquPBZQzIjVp6OdHV11tigtumIA7zd7xJH%2FMU7AlkEmVpZHULX95lT1prVrBn8A9OyePHHNLSv7vqLg%2Bd%2FP1sdbSy29mVSYP91V5u55yndsptxgiKTBkkTo7UWHuERdu%2Fevmgj4Jl7JCwg1Xeh659asld5Ct6EXEqTvuKN1MOcLS0mKbd%2FvzeGjGvrjW3RkVOIFjHDagG%2FI1hY2PRt3sSH2uEMWgjH93bH5F1r%2BSJ5pO2uitSw6zQtpUvtY6RsSbGSk3JJwXCSLAJt%2FLGOhzO09gXzC9xsrJBjqkAd5%2B%2FxwpBCoTAFC1zharFQeRHjJHzt7n9%2BlqyuvGXVUF9jWuK2wrhwlIuxPcdw%2BgzA%2FO1wA8HPjVqQGnVMNYZtdIj2pjQ1ilFs%2FjX1taKKGKCrggqyKxIUK2szWSkslvFiLw3B8gEELBrXQlZcnGTu%2BtZyLxzyXcbpaF%2B%2FyZH8K%2BDvgwY4rokzGS0I0TWyqyGUDUfKxL7OUmVtHSFJJEBeLyk6iB&X-Amz-Signature=2366eb8e79515f57f1a38107c31c8349f484ca5c8fe33dfe00b0934363e0422e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGOLTR77%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYy5T84v%2B9iMOyoAed%2FWuqZR5iizBH7j4r4Y20FxdtwgIhAM6f%2BNKw2wehZdtGtUF9J16eQB8OLB5xySNjRQbspe8OKv8DCFoQABoMNjM3NDIzMTgzODA1IgzofpjMVSc7M%2F4Cbtoq3AMn675pufpz3LZopghWIAJDbkcD1G%2F8LLyckeAfUhTLJuc%2B0Frla0Fqr%2B0LrAP8haxCpStnc6SFDLkNTcifFQBtxpPFMVWeQ5E%2FMIXEztxrvl%2B0qyoOTELaSfffAvSLVZ65gKPwCHYlo8RbZeHisxpt3a3INkSqvWhlA5PvmUp9xiBRK6PxbwACKN%2Fqki5vNeDbtw7vT3VYg6zFpZiUiYBDzejmnT0lLfSA2P8N9QtBwFu%2BDPF8gmHqDaMUd4v4VVP%2FJ3RqB3%2BokWsrqHvAqM1VJAsvOf6G5LcfewrbgUsbrlAU9dW2ArdLHGlCrz37nmBjyXDy3Z6iFXia6OtIXHrEPBPX3N2L5rl%2BiquPBZQzIjVp6OdHV11tigtumIA7zd7xJH%2FMU7AlkEmVpZHULX95lT1prVrBn8A9OyePHHNLSv7vqLg%2Bd%2FP1sdbSy29mVSYP91V5u55yndsptxgiKTBkkTo7UWHuERdu%2Fevmgj4Jl7JCwg1Xeh659asld5Ct6EXEqTvuKN1MOcLS0mKbd%2FvzeGjGvrjW3RkVOIFjHDagG%2FI1hY2PRt3sSH2uEMWgjH93bH5F1r%2BSJ5pO2uitSw6zQtpUvtY6RsSbGSk3JJwXCSLAJt%2FLGOhzO09gXzC9xsrJBjqkAd5%2B%2FxwpBCoTAFC1zharFQeRHjJHzt7n9%2BlqyuvGXVUF9jWuK2wrhwlIuxPcdw%2BgzA%2FO1wA8HPjVqQGnVMNYZtdIj2pjQ1ilFs%2FjX1taKKGKCrggqyKxIUK2szWSkslvFiLw3B8gEELBrXQlZcnGTu%2BtZyLxzyXcbpaF%2B%2FyZH8K%2BDvgwY4rokzGS0I0TWyqyGUDUfKxL7OUmVtHSFJJEBeLyk6iB&X-Amz-Signature=901878febd0b39ad54354942aebff961e811d911b016e803e863052a2c1210cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

