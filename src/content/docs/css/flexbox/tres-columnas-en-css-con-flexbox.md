---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJ4ZY64%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICj8ypRx1ZcW1gLmn2Y%2FAFMIG4kOHt1RCveOPPdYZFqwAiAskAjIZCt4ECFTY4atANj8eWXy13OX%2B4vV4xZE7Y7Zxyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMkwpUfbUUUMppEUplKtwDGQMImRQsHk4BfHvxAlaE5fj3ZqMWKbta9Qq2D7uUs5snREMN8VyCa5dVoNJgKAPrInh2oXf4ANrg9KKUJ8%2BWrEsLD7HptbZixLAUbkkkuV%2FPzKRCG0tLVU79ORzNwAN61yeZYPszj3MLiY9zS4HsQBCsoT5NGvSQD4JTmRh6f2GCR%2FEjDb6%2BWivAnnyuty288z56iOGKaNEkEKvvucx34RXdY%2F0F2%2BgaLgzqVu751rz5Kd729ebk3tlTzUB%2FqH7DCTdYRAnpkGH5uGdP0%2FBymKp5%2FgvxOq8K9l5PFM1qfuuH4Bonl47O6JywE57wLINqTmNB84d%2BdAvipp6QtKt5kef%2FDZ5ci%2Boj8eR%2FeKT94mK4VznhohVoEfojPIWZBBF98%2BYr9BILRK9vySnrAV7oE9yUzSmXSCtT1n%2B4Y1Xiw4PJbSKU5j75ydTQHGEqA6qrOJGyUaSz36PUPUforXpiQspgfmJ3LiEQ0yxryPrIQm7ZasVjC9ApaYGLi1jbhQB%2FTKKKNSDJr%2FQXlA7xbHo74%2FBumfiAf83ZjJuNjU8R%2BTNEa7ACRH9gqynF9ntM3CM8mJqw7UlcL%2B%2FMYwzvFeSpMMLRpOZO2rRkOtZopWu9%2BFNPgVDRDgnFNLKjZxMwxaDGyQY6pgEK3tzq0hUP9DRMcN6gYxAj1FBwSG%2FkR%2BpVJN3G%2FXKFOpZUUQkMUxVyQKGkV3EJcV1hgfi6lhMTeayJG1kRablGVt7TEtzkrtvCDmZnqBHrgAm6UDoO1VGRiYFhK3s3POPalpnflx000D7QR5zkdh%2BbhLr9OnuwwqTFCmG8Y7MI%2Fb0mrcEgcRjFUabPTg9BIzXIqZ5fGlrvv4YfM%2BlGzESy0ILR4cba&X-Amz-Signature=ade642f6b1e04786b4cb96ee1d910a8bc253c1fa0d5b780a138a9f1d5f6b3871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJ4ZY64%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICj8ypRx1ZcW1gLmn2Y%2FAFMIG4kOHt1RCveOPPdYZFqwAiAskAjIZCt4ECFTY4atANj8eWXy13OX%2B4vV4xZE7Y7Zxyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMkwpUfbUUUMppEUplKtwDGQMImRQsHk4BfHvxAlaE5fj3ZqMWKbta9Qq2D7uUs5snREMN8VyCa5dVoNJgKAPrInh2oXf4ANrg9KKUJ8%2BWrEsLD7HptbZixLAUbkkkuV%2FPzKRCG0tLVU79ORzNwAN61yeZYPszj3MLiY9zS4HsQBCsoT5NGvSQD4JTmRh6f2GCR%2FEjDb6%2BWivAnnyuty288z56iOGKaNEkEKvvucx34RXdY%2F0F2%2BgaLgzqVu751rz5Kd729ebk3tlTzUB%2FqH7DCTdYRAnpkGH5uGdP0%2FBymKp5%2FgvxOq8K9l5PFM1qfuuH4Bonl47O6JywE57wLINqTmNB84d%2BdAvipp6QtKt5kef%2FDZ5ci%2Boj8eR%2FeKT94mK4VznhohVoEfojPIWZBBF98%2BYr9BILRK9vySnrAV7oE9yUzSmXSCtT1n%2B4Y1Xiw4PJbSKU5j75ydTQHGEqA6qrOJGyUaSz36PUPUforXpiQspgfmJ3LiEQ0yxryPrIQm7ZasVjC9ApaYGLi1jbhQB%2FTKKKNSDJr%2FQXlA7xbHo74%2FBumfiAf83ZjJuNjU8R%2BTNEa7ACRH9gqynF9ntM3CM8mJqw7UlcL%2B%2FMYwzvFeSpMMLRpOZO2rRkOtZopWu9%2BFNPgVDRDgnFNLKjZxMwxaDGyQY6pgEK3tzq0hUP9DRMcN6gYxAj1FBwSG%2FkR%2BpVJN3G%2FXKFOpZUUQkMUxVyQKGkV3EJcV1hgfi6lhMTeayJG1kRablGVt7TEtzkrtvCDmZnqBHrgAm6UDoO1VGRiYFhK3s3POPalpnflx000D7QR5zkdh%2BbhLr9OnuwwqTFCmG8Y7MI%2Fb0mrcEgcRjFUabPTg9BIzXIqZ5fGlrvv4YfM%2BlGzESy0ILR4cba&X-Amz-Signature=c473a0e32c9f8c2a9c4be5c415d0fae42f6cf60e004317ea7b37d54edc548e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

