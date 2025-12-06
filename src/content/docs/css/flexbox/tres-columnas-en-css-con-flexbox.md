---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLWOHJY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7NUabwbu34IgD77xmdUD0EOt7KZxe6rb5Z3w9DQL9fAiB6UvwhZJMnGS6VDe1G%2B9T2NkyhRzb9NyRRJOohWzFxCCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMM1Cf6ow5wxGwd5hlKtwD2ItM2xxqjOKxaqPC5wLWX3H9ulneptslHIZnZWVTLe%2Bc4TUqGNEYIVYtaA22Ivx8xdsYWcVikvWHR3PtAtsvjsf9wbtVCAHpX1KBX%2BDEkFzvx%2FV51EXnZtg8A2q7T0uDGCew%2FOmN0H%2F9zEh17gi32g%2BbZe0zYBBE91KzUOMgYMpYOsEkld%2BmaufZfb1N6FcNICbs3YAPBFHeHeHlJ2g2CVefbRnmwh4H%2FpJSdLKBp%2ByTdQs%2FsZv8aUiu0Y%2F4sWk%2BUwgoqqPTYY5fCczAR9%2Bll91paM%2BQXVqlv5zCb80tc1%2BSiY%2FIst2oKH0O7HW3jz9isZAb9mqOpcn0ikeFzLUKeJ09Ts1Ur3msqhkm8kC5QR4z1tq7xTa%2Bou9vKifqWFnz2%2BF21a%2BrWENqVPSbll581pbHRHl7yADv4CZE1I%2B3shDVFI5LzDhncUo0jq6VtORvHVMHWK8uhUkoj4zHdnJAE18avVGm6XElrgqWCg2pZAPNGa00rrPzoApKTtJHtXt9bwRBjfKBa3DD82FepM7HGrvBgsQpkoQj4YtVhw9OTRiRNcVnG41N2RXfjMEeKoqqL2MyzaTJ5Lnbf1vFp14sh%2BEydLQILRKo4I0grIKXTdAEHIW8GSgfYGvuAbAwwsbRyQY6pgH%2FweyQxrFKUqX8%2BWw7Z4Czw5ZBmY9ppWCuKO3gY%2BNi9w05OGULzY8zu8aPGPsdXZBwrf%2F%2FfKq1zJ%2Fiqjo5RN%2BkqOpm%2F74auFnl5fvZaVYZuJHkr%2Bj08dSteIl73YIzRmjEBwbCGnly51hiJ9fxgqRXMdAHSFCBBW%2Boe%2FoILK%2F3m24q4DRaGscPhGNE80L2iocO1kV4FI4jHwdY3Ajq1sS1GLfAJtQb&X-Amz-Signature=45a19400ab48ed2fbbae2a2a49605abb16d906fbb2ae63697243d10f2c009378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLWOHJY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7NUabwbu34IgD77xmdUD0EOt7KZxe6rb5Z3w9DQL9fAiB6UvwhZJMnGS6VDe1G%2B9T2NkyhRzb9NyRRJOohWzFxCCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMM1Cf6ow5wxGwd5hlKtwD2ItM2xxqjOKxaqPC5wLWX3H9ulneptslHIZnZWVTLe%2Bc4TUqGNEYIVYtaA22Ivx8xdsYWcVikvWHR3PtAtsvjsf9wbtVCAHpX1KBX%2BDEkFzvx%2FV51EXnZtg8A2q7T0uDGCew%2FOmN0H%2F9zEh17gi32g%2BbZe0zYBBE91KzUOMgYMpYOsEkld%2BmaufZfb1N6FcNICbs3YAPBFHeHeHlJ2g2CVefbRnmwh4H%2FpJSdLKBp%2ByTdQs%2FsZv8aUiu0Y%2F4sWk%2BUwgoqqPTYY5fCczAR9%2Bll91paM%2BQXVqlv5zCb80tc1%2BSiY%2FIst2oKH0O7HW3jz9isZAb9mqOpcn0ikeFzLUKeJ09Ts1Ur3msqhkm8kC5QR4z1tq7xTa%2Bou9vKifqWFnz2%2BF21a%2BrWENqVPSbll581pbHRHl7yADv4CZE1I%2B3shDVFI5LzDhncUo0jq6VtORvHVMHWK8uhUkoj4zHdnJAE18avVGm6XElrgqWCg2pZAPNGa00rrPzoApKTtJHtXt9bwRBjfKBa3DD82FepM7HGrvBgsQpkoQj4YtVhw9OTRiRNcVnG41N2RXfjMEeKoqqL2MyzaTJ5Lnbf1vFp14sh%2BEydLQILRKo4I0grIKXTdAEHIW8GSgfYGvuAbAwwsbRyQY6pgH%2FweyQxrFKUqX8%2BWw7Z4Czw5ZBmY9ppWCuKO3gY%2BNi9w05OGULzY8zu8aPGPsdXZBwrf%2F%2FfKq1zJ%2Fiqjo5RN%2BkqOpm%2F74auFnl5fvZaVYZuJHkr%2Bj08dSteIl73YIzRmjEBwbCGnly51hiJ9fxgqRXMdAHSFCBBW%2Boe%2FoILK%2F3m24q4DRaGscPhGNE80L2iocO1kV4FI4jHwdY3Ajq1sS1GLfAJtQb&X-Amz-Signature=11ea3095857fcfae2fd687a7ef0acab46d363ceea1aa8bb9398ccb4e46a91eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

