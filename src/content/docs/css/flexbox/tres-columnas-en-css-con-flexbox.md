---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELFXIOA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEHJV%2B27y8AwiBIW9msnT0Q%2BCkTrJMkwq0IkOv90IhIAiAMiFIHpNMmYElEe%2FGulJbB%2BJBcwquvVcc4No04XAZ6pyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM8nHG%2FbdDdULug9brKtwD9yTEtdf0Nh4tSI4jnVJ9PeCC7BUqyzU%2B7F7Os5OcYr7JpLYqoUYTC545ELnpiV6sEDO5Xsq6QbEAgLTRxIuIPDAQVt4w9y%2BXVsx7G2cLGwj3ssqHpvb3lNvTu5Lry4mi1kWdVrczKxhuoSu5eX86Ms3DatILDYdrPY1Ou88zdEm738CwiL0zpdn3y87zs1D4ei8PQXRFUqC9ZrRu7TmtpL7HA3k%2BR439gVFj5%2BAHRYgKpPT%2Fjz77M7PP5LbHPgAAaHyh5soqtVBD%2BCLd9UlRwo%2BoxUYaR9vtYYr1BIsfeYNzdf5ZZ%2BD25E229J6oGi7ZFsZ3LxEWafenFAGed1SQ%2F3fpLT5gDOcUbjrWzCfZ3zZ99KnNH2y3NKzB1io7Su7WHgtFcUtSxVwBnhMWsB47Cc1ykSJwDCi8VN0OefoiSgr4hY1dZeS%2Bsm07R3rfhoIr%2Fl9jNR1kLQeHO6bcu%2BciB3c9%2Bc7vaLS4bxu2jW0r8WKMpLJMAcbnvUpe34TlxJkuxctvCMjgIVOh%2FXKAMVahOuJl1drKq3RhWje9PbsKJhnStLjy6uU%2FP0cNcSxUs1n3RynfwzeKyz2XL6fNZSe42QrIbaLyJCmUITsrCCBP9D2Pdyb0tLKMaMPzNugw3qrJyQY6pgEIIq%2Fq2rDkp63UF3yhyl1FT6%2FbeU9Sh2chTx2oXhm5%2BAhvtT3oFgVFd6ni3oTJHt0nXMu2AvGFZn0nXtFOws%2FPCzFneEJNQ8S6fEfbHejO05dWOTdk5ghKgSNOns6sJAcFzuWJeEUYTIJ0zRBYNAT6Y6SuGLC7YDOBJNWFG02RWQ5TPHPKVrPHpLKjlOvn2%2Fc0x6hICN0eE1BKWOYqa%2B1DmMsaB5he&X-Amz-Signature=dcb5c1e8ce273535fd9bf1cf27fc8d5684cfb87e01a537a1bbc5c41a9f779b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELFXIOA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEHJV%2B27y8AwiBIW9msnT0Q%2BCkTrJMkwq0IkOv90IhIAiAMiFIHpNMmYElEe%2FGulJbB%2BJBcwquvVcc4No04XAZ6pyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM8nHG%2FbdDdULug9brKtwD9yTEtdf0Nh4tSI4jnVJ9PeCC7BUqyzU%2B7F7Os5OcYr7JpLYqoUYTC545ELnpiV6sEDO5Xsq6QbEAgLTRxIuIPDAQVt4w9y%2BXVsx7G2cLGwj3ssqHpvb3lNvTu5Lry4mi1kWdVrczKxhuoSu5eX86Ms3DatILDYdrPY1Ou88zdEm738CwiL0zpdn3y87zs1D4ei8PQXRFUqC9ZrRu7TmtpL7HA3k%2BR439gVFj5%2BAHRYgKpPT%2Fjz77M7PP5LbHPgAAaHyh5soqtVBD%2BCLd9UlRwo%2BoxUYaR9vtYYr1BIsfeYNzdf5ZZ%2BD25E229J6oGi7ZFsZ3LxEWafenFAGed1SQ%2F3fpLT5gDOcUbjrWzCfZ3zZ99KnNH2y3NKzB1io7Su7WHgtFcUtSxVwBnhMWsB47Cc1ykSJwDCi8VN0OefoiSgr4hY1dZeS%2Bsm07R3rfhoIr%2Fl9jNR1kLQeHO6bcu%2BciB3c9%2Bc7vaLS4bxu2jW0r8WKMpLJMAcbnvUpe34TlxJkuxctvCMjgIVOh%2FXKAMVahOuJl1drKq3RhWje9PbsKJhnStLjy6uU%2FP0cNcSxUs1n3RynfwzeKyz2XL6fNZSe42QrIbaLyJCmUITsrCCBP9D2Pdyb0tLKMaMPzNugw3qrJyQY6pgEIIq%2Fq2rDkp63UF3yhyl1FT6%2FbeU9Sh2chTx2oXhm5%2BAhvtT3oFgVFd6ni3oTJHt0nXMu2AvGFZn0nXtFOws%2FPCzFneEJNQ8S6fEfbHejO05dWOTdk5ghKgSNOns6sJAcFzuWJeEUYTIJ0zRBYNAT6Y6SuGLC7YDOBJNWFG02RWQ5TPHPKVrPHpLKjlOvn2%2Fc0x6hICN0eE1BKWOYqa%2B1DmMsaB5he&X-Amz-Signature=55c2e91a5e0acac77c7fa4d46daac4ea0116e0fbb4b6e630a16f891927fda136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

