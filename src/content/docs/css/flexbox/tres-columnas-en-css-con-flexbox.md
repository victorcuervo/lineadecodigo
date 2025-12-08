---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6D3OTX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD%2FRuh1VVSw3twuDXw6R57EtnbsnZz8C%2FFjPJcP6vCHAiBW6iD7vVyoUaJITWXsP1GoD1ZkOKIj5yNbq4PATaVZyyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9J1pzVcMc%2FPMglVAKtwD950dwBkzP2dmaTk3z5g9uieXaz7Se3U4kXzSe64CdotP5CE1kmRNvT8pN35ft%2FuIoEr7JWEEmrIuZ5VzFJMuXh2QvTssPKP%2BWSMiuPJ6Pin8tY4bmwvDpfsyEz69Dm6aObpQAzwptvhO56qq%2Bb3i087l9mKOfH0ZqDiorI6cQP6C0%2BdZvH9rQUYQDIXxZ%2FJMjfCdC8ImvZZDNyNGP4rj7W6gaHGYfAQAYQCBFNWAfjgjeMgzeTKLnot%2FKYIrDOy0EHG9EFt4FgNxDr0fOyGP9xvvDTRaOuyds9veXRMb36xZVHwq7%2F14naotwy47ks9wZRF32LqXEQfVSnJYN5a07Q3cncWXwpAg54Wh3suFOdTIuVBmtY%2BrwtC5gjShX3kXSd7UnWtD1N9WIwgtFDS5FlXPcBL9r7Gfswd1KAlvupQgz7gmM%2BnsYL5Nw6A1ya8bpZ3LUvDq2mY6Qu119OiArjrOhZLvQWSXWEWtgPdfBvZsg6%2BTw1ZHKsRHox3J5wHwnR3e1PDrZ0eTl3MYjQxWiPBQnZ2s5y2SW6Bm961gzVu9ry5DhwPTge%2FiK8FHbNpEi7Ee7UbA0hQS9Wwd5jCjO%2Bx5TZ6jDAUT7kwZ%2BsuT92thVC1gKNG8WYIMWk0wptzcyQY6pgELlAItQ99BtBGWLaKwz5FNWsDkWxfnGBQsgmiluXoXxZAoJUN7FzsXoZ3xVsVI2CrX8ZM3GqQImVU12u4tH7hK0LKRvVaC4zxYLfgAVgdy0U9NIY2RyrSGZ%2FkoerCH5at%2FgR49wiLWhcdL5GK3J%2BvXB081Dx3S8sIogoVhmCIYRLUHgxeyFc%2B9v3MZnCh6mx649WXRxjjSJ%2FD6O%2B2wkJ0CC1eTk6P4&X-Amz-Signature=248aa1ea42daf66e9f195bca97bc0f415f4a757d16ac9505f593993ff4b5a24b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6D3OTX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD%2FRuh1VVSw3twuDXw6R57EtnbsnZz8C%2FFjPJcP6vCHAiBW6iD7vVyoUaJITWXsP1GoD1ZkOKIj5yNbq4PATaVZyyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9J1pzVcMc%2FPMglVAKtwD950dwBkzP2dmaTk3z5g9uieXaz7Se3U4kXzSe64CdotP5CE1kmRNvT8pN35ft%2FuIoEr7JWEEmrIuZ5VzFJMuXh2QvTssPKP%2BWSMiuPJ6Pin8tY4bmwvDpfsyEz69Dm6aObpQAzwptvhO56qq%2Bb3i087l9mKOfH0ZqDiorI6cQP6C0%2BdZvH9rQUYQDIXxZ%2FJMjfCdC8ImvZZDNyNGP4rj7W6gaHGYfAQAYQCBFNWAfjgjeMgzeTKLnot%2FKYIrDOy0EHG9EFt4FgNxDr0fOyGP9xvvDTRaOuyds9veXRMb36xZVHwq7%2F14naotwy47ks9wZRF32LqXEQfVSnJYN5a07Q3cncWXwpAg54Wh3suFOdTIuVBmtY%2BrwtC5gjShX3kXSd7UnWtD1N9WIwgtFDS5FlXPcBL9r7Gfswd1KAlvupQgz7gmM%2BnsYL5Nw6A1ya8bpZ3LUvDq2mY6Qu119OiArjrOhZLvQWSXWEWtgPdfBvZsg6%2BTw1ZHKsRHox3J5wHwnR3e1PDrZ0eTl3MYjQxWiPBQnZ2s5y2SW6Bm961gzVu9ry5DhwPTge%2FiK8FHbNpEi7Ee7UbA0hQS9Wwd5jCjO%2Bx5TZ6jDAUT7kwZ%2BsuT92thVC1gKNG8WYIMWk0wptzcyQY6pgELlAItQ99BtBGWLaKwz5FNWsDkWxfnGBQsgmiluXoXxZAoJUN7FzsXoZ3xVsVI2CrX8ZM3GqQImVU12u4tH7hK0LKRvVaC4zxYLfgAVgdy0U9NIY2RyrSGZ%2FkoerCH5at%2FgR49wiLWhcdL5GK3J%2BvXB081Dx3S8sIogoVhmCIYRLUHgxeyFc%2B9v3MZnCh6mx649WXRxjjSJ%2FD6O%2B2wkJ0CC1eTk6P4&X-Amz-Signature=de2a120f8216cd0f9c0b07259a81ccb697db923e27d24c732381d4c9a79076d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

