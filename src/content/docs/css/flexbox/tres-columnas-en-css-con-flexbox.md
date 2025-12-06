---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDBYBFZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGS6b0aB0NjWEWiBBqw88kJv2PgSWsRkBW%2FTWTwTGHpAiEA2IrSAxiW%2B91u%2BSF3pJs2d7AVxd3FQmoit8zlSLDRQ6wq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIe%2FL2z8PfQtMB3XEyrcA2zOP6s7C0CfPt%2FAO8hdtUT%2FpEelIl0%2FgrzQzv3p1nkTXIBx%2FHWZM56QiucjrPiLtMbbfeUKMafZ6WwZlX5%2F8mfFh%2FKOGAnjmICNA48YmiLqZv8ZbSvwLY%2FmBGv0WvjzIp5N1QCNVa5fyZ42NnfAgevOBPYSAihk47OvQ7Cr3a%2FAGTa9syNX7N61HVC%2FQStwgGSANYy%2BizQ5DdWDjPYuzDUeEgNnQPq%2B5QSLPhT6N0c3on%2BsV%2FoOKdUl03cl1rcA79P7fJrV%2B%2BknrLys7rMKRm5Mvt%2Bp6geEuDtxZySbgybe8Y4zqV7U2WJF1tvRUdthf%2F9cfWc6Ta7pFHBGrqvZZX%2BmvlocpHozEuM3rjddTzG%2Fu7kxHH86HyPEaoVWfKki2hWHJ8CL4b6%2BUbj8SvAKTDSLfr3qzSq9TP3raFAgbRR1kQOlbF%2BYZlV%2BnSLGTlsM2552UUivDuV501mVCTdSCfxFVeQvxQ0kMm%2FksFcl5nmi5JyF54mqvwz%2FoniQtZwYtJeaLzup2qkfceOyQkMTV0XWTznHK44HGfLaKWh23yRmzksD8hrQq41C6NKCar4%2BpZbSlE4U%2FShPv0jepHhJTyzZy19igGFLO%2BXtqiYWDMqpufRiVRoPzS3S4I6vMNX8zskGOqUBF96PLjOgeR8FMspUoQXPj4%2Fye8HQiIzcYXrHQzzj7MQr7O5NZmjpDQwWlhUvQ762FrqZFx1MilhAAirog55aUQqKTDAUHJXEHzkBgObzivCmhnTNX95K2dt2hSvCPbXxtBOQiN08p0jzehnQUHHm3CmoYxHmh8D6bYos4cqHdFUjC6LbcBSLoIEtQ41qjRI27pUvVN6Wq5mXyL56kRxiD4iDvvO0&X-Amz-Signature=8a5a01a60b0c2908b409ac522271648803466ba27b3f5d7abb64527d0a3295be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDBYBFZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGS6b0aB0NjWEWiBBqw88kJv2PgSWsRkBW%2FTWTwTGHpAiEA2IrSAxiW%2B91u%2BSF3pJs2d7AVxd3FQmoit8zlSLDRQ6wq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIe%2FL2z8PfQtMB3XEyrcA2zOP6s7C0CfPt%2FAO8hdtUT%2FpEelIl0%2FgrzQzv3p1nkTXIBx%2FHWZM56QiucjrPiLtMbbfeUKMafZ6WwZlX5%2F8mfFh%2FKOGAnjmICNA48YmiLqZv8ZbSvwLY%2FmBGv0WvjzIp5N1QCNVa5fyZ42NnfAgevOBPYSAihk47OvQ7Cr3a%2FAGTa9syNX7N61HVC%2FQStwgGSANYy%2BizQ5DdWDjPYuzDUeEgNnQPq%2B5QSLPhT6N0c3on%2BsV%2FoOKdUl03cl1rcA79P7fJrV%2B%2BknrLys7rMKRm5Mvt%2Bp6geEuDtxZySbgybe8Y4zqV7U2WJF1tvRUdthf%2F9cfWc6Ta7pFHBGrqvZZX%2BmvlocpHozEuM3rjddTzG%2Fu7kxHH86HyPEaoVWfKki2hWHJ8CL4b6%2BUbj8SvAKTDSLfr3qzSq9TP3raFAgbRR1kQOlbF%2BYZlV%2BnSLGTlsM2552UUivDuV501mVCTdSCfxFVeQvxQ0kMm%2FksFcl5nmi5JyF54mqvwz%2FoniQtZwYtJeaLzup2qkfceOyQkMTV0XWTznHK44HGfLaKWh23yRmzksD8hrQq41C6NKCar4%2BpZbSlE4U%2FShPv0jepHhJTyzZy19igGFLO%2BXtqiYWDMqpufRiVRoPzS3S4I6vMNX8zskGOqUBF96PLjOgeR8FMspUoQXPj4%2Fye8HQiIzcYXrHQzzj7MQr7O5NZmjpDQwWlhUvQ762FrqZFx1MilhAAirog55aUQqKTDAUHJXEHzkBgObzivCmhnTNX95K2dt2hSvCPbXxtBOQiN08p0jzehnQUHHm3CmoYxHmh8D6bYos4cqHdFUjC6LbcBSLoIEtQ41qjRI27pUvVN6Wq5mXyL56kRxiD4iDvvO0&X-Amz-Signature=ed2c39d3d1b0b8ef9f1592af7574998a78545b916ad8280d77553111aa5b9861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

