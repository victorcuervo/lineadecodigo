---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOG4MLH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUP%2FAXQtAscTuc0syVIdTgaXz9PGl8g2N0pKMhOgwSuAiEAkNnkD8k6dPN2TG79nv604Jk20PhK9O4r5YvizvemMvwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDE3RNA%2Bcenf6J3eXCrcA2WuxHxoOrBP6aRKivmS1Ff45zs4RtLQrw0I5XBD55eIaKkZZK%2FwY52WS0LyAi3vS7%2Fq4%2FysTszFPHASLYStMnT67quiM4dCs%2Bhz8NSSUd%2BN1s0az3BYZzYQib7tkzLcNCMEZOwI4w5gKI3E7llD5s5ymVC%2FxjWNBAG%2BlW2JOaVJNzz4I2QJkx%2BxHEkGjJyJhBwNJfiUvRP7TxePPnwRyqKrXGRmis39k8SryvmSDZtjmSOY8ao2cyuxD%2BNxJinumu3uYbbMWD083f71fV9JubUE0QV2twpzGRObecws%2FXbtxVRwD3qkLWXZjTpxwLqhZhJTTeyI8%2BT6i5OApo0A8C1vqCJSXlkvKhre8luEY8Pr0WPhvBt61FObsjcC8q8zdj15L2UwsmjU7MX0FCkm9IAwkNSaB2fus0xl0MulfnU5wwNrIHTdkalqGijufPC2IJMJuwtIjaOKyTdPk3wGcIxTizGf5943PaMXyKnJM0wRMG8q52rcKTlol9QNlIuQZtPMfBhyMMv6gKyk9dypN2THHYqBxHk5TzPW3z4hxsC6VaX0EesbnXq2wFBDtIwO7pKpAFPFTgEHtq6REidXZsXPlIpGVbehBY%2F0Q0FAgaHsF5ez30fIWibF3on2MK7%2B0skGOqUBoroP6rfEoby00HUos7v72BxeoF%2B0H%2Fp9wGG5R7OfthbC%2Fp%2FcsrdR5uu8t3gX9O0MI27Gj2vPOpPWCrDd%2F9z2aqqap%2Bpm6vInrQBkgeKdektCGMV7mBpItCP4AtYrAOD2I30%2BrBrXgYCsKCZEDm6DZK3eLjQ2OKQBMtNqdy8Ke2i8chzA9T9%2Fgv8NSgF4wpGF97AiJd81A89%2BOrgOOdTfWPx0Q6Jb&X-Amz-Signature=e87ba141d2eea6195a2eaaeb60feb477abd16ff0183a0a8efd446bb8c4dce705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOG4MLH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUP%2FAXQtAscTuc0syVIdTgaXz9PGl8g2N0pKMhOgwSuAiEAkNnkD8k6dPN2TG79nv604Jk20PhK9O4r5YvizvemMvwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDE3RNA%2Bcenf6J3eXCrcA2WuxHxoOrBP6aRKivmS1Ff45zs4RtLQrw0I5XBD55eIaKkZZK%2FwY52WS0LyAi3vS7%2Fq4%2FysTszFPHASLYStMnT67quiM4dCs%2Bhz8NSSUd%2BN1s0az3BYZzYQib7tkzLcNCMEZOwI4w5gKI3E7llD5s5ymVC%2FxjWNBAG%2BlW2JOaVJNzz4I2QJkx%2BxHEkGjJyJhBwNJfiUvRP7TxePPnwRyqKrXGRmis39k8SryvmSDZtjmSOY8ao2cyuxD%2BNxJinumu3uYbbMWD083f71fV9JubUE0QV2twpzGRObecws%2FXbtxVRwD3qkLWXZjTpxwLqhZhJTTeyI8%2BT6i5OApo0A8C1vqCJSXlkvKhre8luEY8Pr0WPhvBt61FObsjcC8q8zdj15L2UwsmjU7MX0FCkm9IAwkNSaB2fus0xl0MulfnU5wwNrIHTdkalqGijufPC2IJMJuwtIjaOKyTdPk3wGcIxTizGf5943PaMXyKnJM0wRMG8q52rcKTlol9QNlIuQZtPMfBhyMMv6gKyk9dypN2THHYqBxHk5TzPW3z4hxsC6VaX0EesbnXq2wFBDtIwO7pKpAFPFTgEHtq6REidXZsXPlIpGVbehBY%2F0Q0FAgaHsF5ez30fIWibF3on2MK7%2B0skGOqUBoroP6rfEoby00HUos7v72BxeoF%2B0H%2Fp9wGG5R7OfthbC%2Fp%2FcsrdR5uu8t3gX9O0MI27Gj2vPOpPWCrDd%2F9z2aqqap%2Bpm6vInrQBkgeKdektCGMV7mBpItCP4AtYrAOD2I30%2BrBrXgYCsKCZEDm6DZK3eLjQ2OKQBMtNqdy8Ke2i8chzA9T9%2Fgv8NSgF4wpGF97AiJd81A89%2BOrgOOdTfWPx0Q6Jb&X-Amz-Signature=cdda3151b7b2fae4003344b6ad4e7a726930d55a586dead38bc0d5ff16ae2ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

