---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HVMWYUZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPg%2Bv%2FLn9IyXBih9knXFOAgTgwvfX%2F%2BUK9Q4h6KFSaQwIgJzQ5mBvPI06vbBtW%2BSkaazVqB1TSWVLHHPtz8c91nDUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD%2BhTwiE5SCHob7iFCrcA%2F%2BJUkeSZaJxJSoCR7LeuoHmADu1FmfKkcPcQGO2jfQRKFk6%2BWaaGfSMP%2F%2Bo%2BNXQULJAMAs%2FK0HnKq%2F8s1YBh733JNH4jv3J%2Fj7n8ywTov12R2zUHoDrnCA3EbO%2BO4M4GqoUUBp1%2B7%2BRYOB0Uq19nKVUILcKCVHDEEmMSbYbtre3FKrqxvCScqfJFd0TMigwFCF8gFN%2Bf8On%2FYgLKD3%2Bx%2Btx8GRrwG4al92bnJPGz%2BZ3Nf9JpKD9Yiaw0O8v0d0fxstAiS0D%2BSQ7%2Bdx1PjG7W8cMQqu%2FG%2Fsuope84u9suJIdqYWFT4I%2FLJfOuoq7gq%2BuLmv%2FUjt7j9vyljgSvIppOC7JlMITtzlFVdlIwQGLYdz5%2FrTqOpMfWM84o95ttVDcuAujV0e5XP3%2BnNVQq8mVI2NS06HqoE4iQgxqztD7sQs26VCymLOe7j7sDJduaTV0J7wYfqfVG0oIY5pvj%2FFbyq42gstOGem33qX9QKzcJZO8nl0wCgKz38iixL0s%2FWdCe8xXJ5m1v9H0LxwGR6QV5rGcPeqhK79OUrBB89hS%2BMZg0Yurtpyo4cOEXgLcpQor2Xz7zRpqebwI5R0Dy9QfAbomG0cDkR562JRxO8348JE8gBnc8sbPnjLx5ZN0MKm8z8kGOqUB%2BobkrX%2F6mReMGb9zXDqqSNFBbdvZ3iCfCHaSjOHxWteyMcyXPIQDAqfcfjqf1qlfZSfavba1QvgkySCCUDWWxh4BzqIlHj9tMZq7plbQahVcUA5U3KB%2FC3%2Bc77n03%2FtLXyzfEgH1gkVmLm0sDWFJ1JLKjEiWoRbPPHkQY4WcIEInSmkNoo43fyCLMhemFZlxqDs1i4lpcc4hsdmVpruv5AFhhP4X&X-Amz-Signature=1a6e388ded98d2c691b98405521943e8ed877648a03961b904b655e016f2b388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HVMWYUZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPg%2Bv%2FLn9IyXBih9knXFOAgTgwvfX%2F%2BUK9Q4h6KFSaQwIgJzQ5mBvPI06vbBtW%2BSkaazVqB1TSWVLHHPtz8c91nDUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD%2BhTwiE5SCHob7iFCrcA%2F%2BJUkeSZaJxJSoCR7LeuoHmADu1FmfKkcPcQGO2jfQRKFk6%2BWaaGfSMP%2F%2Bo%2BNXQULJAMAs%2FK0HnKq%2F8s1YBh733JNH4jv3J%2Fj7n8ywTov12R2zUHoDrnCA3EbO%2BO4M4GqoUUBp1%2B7%2BRYOB0Uq19nKVUILcKCVHDEEmMSbYbtre3FKrqxvCScqfJFd0TMigwFCF8gFN%2Bf8On%2FYgLKD3%2Bx%2Btx8GRrwG4al92bnJPGz%2BZ3Nf9JpKD9Yiaw0O8v0d0fxstAiS0D%2BSQ7%2Bdx1PjG7W8cMQqu%2FG%2Fsuope84u9suJIdqYWFT4I%2FLJfOuoq7gq%2BuLmv%2FUjt7j9vyljgSvIppOC7JlMITtzlFVdlIwQGLYdz5%2FrTqOpMfWM84o95ttVDcuAujV0e5XP3%2BnNVQq8mVI2NS06HqoE4iQgxqztD7sQs26VCymLOe7j7sDJduaTV0J7wYfqfVG0oIY5pvj%2FFbyq42gstOGem33qX9QKzcJZO8nl0wCgKz38iixL0s%2FWdCe8xXJ5m1v9H0LxwGR6QV5rGcPeqhK79OUrBB89hS%2BMZg0Yurtpyo4cOEXgLcpQor2Xz7zRpqebwI5R0Dy9QfAbomG0cDkR562JRxO8348JE8gBnc8sbPnjLx5ZN0MKm8z8kGOqUB%2BobkrX%2F6mReMGb9zXDqqSNFBbdvZ3iCfCHaSjOHxWteyMcyXPIQDAqfcfjqf1qlfZSfavba1QvgkySCCUDWWxh4BzqIlHj9tMZq7plbQahVcUA5U3KB%2FC3%2Bc77n03%2FtLXyzfEgH1gkVmLm0sDWFJ1JLKjEiWoRbPPHkQY4WcIEInSmkNoo43fyCLMhemFZlxqDs1i4lpcc4hsdmVpruv5AFhhP4X&X-Amz-Signature=d3cd3882d821d6adc42ae5bb1ba3924b686f0d5a2ae5921d36eb705d568a3855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

