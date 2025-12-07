---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4TZPIN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZIviHIt9OpVFfdy9VM2t30efJ6LinsbzkDAWWCisjXAiA7nySpjAioYyvp6YNS1CXTB5YmRGQ2rD3ztq4zR%2BUk8CqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxBOK18W0yTbhtrgBKtwDeCHdKYGLESYmDVgaFilhR4OZTjot7rAn6T%2F2BtVb1zMgEtqS5wdbq43CKqUW30MkD0YvqOCABwgCLllMtnAOQwqhTw7N6V%2BRlLkEZvz02IiQN2lQUguxU%2BUasXqtoVBgjYE%2FyZbHlks2urmdZLFRsQt9gj%2FRjhWNxUlGCxj532y3jTunvhkAXqfGK5FvbrlGR8aZQtvc2%2BQSaHSllVqRsl8f1Uv4O%2BSCdU7eu7qZ22OfVESLV2s73suNwpWAZESx52M5%2FxaCg84ArNdzrko4kxg2VclSYjt9FHlVyW91OBmxNAh7Otq1e6PNBnLd5pztr9xtsrNXd8dUod%2FObnTaSFfT6%2B%2BaTU5tqkgOhIzcDYm7mEN0e6bRWCHSQYLzubmIwIKUk6zYRgH17QqhuibsZ6UQxzx1TTRkJmRxkSUac2HhFoFUBtam6ivObpOUZmXtHfyta6ccXG75JcJqiqhgfAl40PA%2BindmFdEeDws96t7NcD97VRSCnRjGP6I2DhR4v0hO6xYxtrAhWB5oCkfWyWL7XczkdomGTnrpcOiPTKXay74vJ4552J5Yh7CDaDP6RlMeV9wPyp%2FsfC0OfzVpvPNXv%2BPITmvTW6%2Buz%2F%2F1%2FJWJLXWFfQifMO1PSqowq6LUyQY6pgFdp0adnnD4Te31T5qLo6v16y3M%2BdnJul4F4XdgYOSe5HEpn4kra1k%2ByIBrTuJFjR3jsU1H1SkeeBAJc0M3EyZBNASytmm8en4mu6Hkt4ft%2BoP%2BL5fT5Lfart8bz8EM1Duq8NjyZbm55X%2Bnz84wCz2BbCjUFC%2Fq1G82udhdz9u%2B5Ft4WWOMKNW0EtMpoHa5304OQuUOXi9xNceZsE7QlBBba1bhlZll&X-Amz-Signature=b89bcd1c05f273f9b8ca2a5f4b4920edab457866b0f6f332e09fd0f567f8ef42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4TZPIN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZIviHIt9OpVFfdy9VM2t30efJ6LinsbzkDAWWCisjXAiA7nySpjAioYyvp6YNS1CXTB5YmRGQ2rD3ztq4zR%2BUk8CqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxBOK18W0yTbhtrgBKtwDeCHdKYGLESYmDVgaFilhR4OZTjot7rAn6T%2F2BtVb1zMgEtqS5wdbq43CKqUW30MkD0YvqOCABwgCLllMtnAOQwqhTw7N6V%2BRlLkEZvz02IiQN2lQUguxU%2BUasXqtoVBgjYE%2FyZbHlks2urmdZLFRsQt9gj%2FRjhWNxUlGCxj532y3jTunvhkAXqfGK5FvbrlGR8aZQtvc2%2BQSaHSllVqRsl8f1Uv4O%2BSCdU7eu7qZ22OfVESLV2s73suNwpWAZESx52M5%2FxaCg84ArNdzrko4kxg2VclSYjt9FHlVyW91OBmxNAh7Otq1e6PNBnLd5pztr9xtsrNXd8dUod%2FObnTaSFfT6%2B%2BaTU5tqkgOhIzcDYm7mEN0e6bRWCHSQYLzubmIwIKUk6zYRgH17QqhuibsZ6UQxzx1TTRkJmRxkSUac2HhFoFUBtam6ivObpOUZmXtHfyta6ccXG75JcJqiqhgfAl40PA%2BindmFdEeDws96t7NcD97VRSCnRjGP6I2DhR4v0hO6xYxtrAhWB5oCkfWyWL7XczkdomGTnrpcOiPTKXay74vJ4552J5Yh7CDaDP6RlMeV9wPyp%2FsfC0OfzVpvPNXv%2BPITmvTW6%2Buz%2F%2F1%2FJWJLXWFfQifMO1PSqowq6LUyQY6pgFdp0adnnD4Te31T5qLo6v16y3M%2BdnJul4F4XdgYOSe5HEpn4kra1k%2ByIBrTuJFjR3jsU1H1SkeeBAJc0M3EyZBNASytmm8en4mu6Hkt4ft%2BoP%2BL5fT5Lfart8bz8EM1Duq8NjyZbm55X%2Bnz84wCz2BbCjUFC%2Fq1G82udhdz9u%2B5Ft4WWOMKNW0EtMpoHa5304OQuUOXi9xNceZsE7QlBBba1bhlZll&X-Amz-Signature=dec2644d0c41ca7dbc6cc928202b49fc8f4d526606ea4420fb7d9df6a1bfe63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

