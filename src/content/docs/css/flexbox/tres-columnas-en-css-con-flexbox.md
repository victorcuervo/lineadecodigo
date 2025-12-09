---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY7XBLSC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd8p%2F%2BluRKw21oGv1Gf4USQny9C3YRqR2SlZMlVt74VQIhALT%2FgYic0raLSMgmw8QCqMRr2CNKqSyWg7y4HBRbnfKRKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsbutotfMFjk2iidAq3ANwIU0myRWTiXnBSJ1rYBPDLtHxoQM1n6V3Jy7muw47AJ2te4IfeikXrMSGrIVoLmFjShlFM%2FFVP813eKcsNSzNJ8yzaHRUzzPVnWjOx%2FYloWcc48meX3VsMI698g94AZS%2BfsNZCFLqLTl0kgyZLyBlRz%2BXLAqAMBkFwknJeiB8Br7E3IxnhthwK5v4%2FrZXXVOvXil1pE7rfy%2FHF98vW8d9v5Eg7eqK%2Bivl1Y6oZZEPsMaFgD%2FaXrxcZscqQEJQWnhBZ8ped3TOb4MmtPUNPygATd6xTmPMT2agCmvZD2WFWqiCkgudV7K049%2BJ3qUeAsfYmGmbJ9Wn%2BCGXdQEd05PTnPnN6q4HFNTGZN8NH40e6%2FUjhSRd%2B3CpZ3AIQ80FrxtZ2lR1FVSEbJ7AGXOMEcB4PDxc2JyrMTtfYht2s12ly1RriStXFEMcCvCaB4jeST8%2F9pTr%2BzCehJ%2FISxWCWwlflGJtG0NktMQy7ULIXh6FGFggELi%2FoME4TtD2X5EaLA82Wj1HYQSjRc3qH33PdUAVn%2BMCFQxiZXK6sSsLrSQVTgWfkBPosmff7%2BUZ7vaMLMtpXGVhZrWa3fwGr0OUpfrF%2BW3eqUsRkLP9y4uV%2B2pH4yaWwRqFCyqKwZ6qpzDBkN7JBjqkAW%2BEeWWeiHyLhMOtbQN3x3g3ir5Mxv%2FXCPnFvP0PdO1uwHi0pa9DZU7W8j%2BRtbkw81hxxDvKsIUPTxlyfWVySmOw3KzSmiMrKrsOC4ik7Zs5EZXmwQsJeZnt2%2Bmxqh0Me5AwSFjI2G9djne0IRCxg0k4W3L7NhKaFDTZrQzazKb3rfK%2BS%2FZ0LcRJ2tytBVJBMpQKYkUzi5%2BKcKtUCI%2BGk498wgSD&X-Amz-Signature=922eb2dd2882e290692e4dadc89bc0e4b18ef6a68bb7b42d2c5756f1504ca8fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY7XBLSC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd8p%2F%2BluRKw21oGv1Gf4USQny9C3YRqR2SlZMlVt74VQIhALT%2FgYic0raLSMgmw8QCqMRr2CNKqSyWg7y4HBRbnfKRKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsbutotfMFjk2iidAq3ANwIU0myRWTiXnBSJ1rYBPDLtHxoQM1n6V3Jy7muw47AJ2te4IfeikXrMSGrIVoLmFjShlFM%2FFVP813eKcsNSzNJ8yzaHRUzzPVnWjOx%2FYloWcc48meX3VsMI698g94AZS%2BfsNZCFLqLTl0kgyZLyBlRz%2BXLAqAMBkFwknJeiB8Br7E3IxnhthwK5v4%2FrZXXVOvXil1pE7rfy%2FHF98vW8d9v5Eg7eqK%2Bivl1Y6oZZEPsMaFgD%2FaXrxcZscqQEJQWnhBZ8ped3TOb4MmtPUNPygATd6xTmPMT2agCmvZD2WFWqiCkgudV7K049%2BJ3qUeAsfYmGmbJ9Wn%2BCGXdQEd05PTnPnN6q4HFNTGZN8NH40e6%2FUjhSRd%2B3CpZ3AIQ80FrxtZ2lR1FVSEbJ7AGXOMEcB4PDxc2JyrMTtfYht2s12ly1RriStXFEMcCvCaB4jeST8%2F9pTr%2BzCehJ%2FISxWCWwlflGJtG0NktMQy7ULIXh6FGFggELi%2FoME4TtD2X5EaLA82Wj1HYQSjRc3qH33PdUAVn%2BMCFQxiZXK6sSsLrSQVTgWfkBPosmff7%2BUZ7vaMLMtpXGVhZrWa3fwGr0OUpfrF%2BW3eqUsRkLP9y4uV%2B2pH4yaWwRqFCyqKwZ6qpzDBkN7JBjqkAW%2BEeWWeiHyLhMOtbQN3x3g3ir5Mxv%2FXCPnFvP0PdO1uwHi0pa9DZU7W8j%2BRtbkw81hxxDvKsIUPTxlyfWVySmOw3KzSmiMrKrsOC4ik7Zs5EZXmwQsJeZnt2%2Bmxqh0Me5AwSFjI2G9djne0IRCxg0k4W3L7NhKaFDTZrQzazKb3rfK%2BS%2FZ0LcRJ2tytBVJBMpQKYkUzi5%2BKcKtUCI%2BGk498wgSD&X-Amz-Signature=cd3a6735dbe76f012f2742033be59a1336cdffe0848b769f4ec2a8e381357885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

