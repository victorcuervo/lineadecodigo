---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7M4TGK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICt0yrcmG0LIwD%2FE%2BMywoRekxHlzn1VpA69sjkgQEYsUAiBGhb3QChXLi0mfFvlAkYR77kxS6qSNEE0E0NKbHJ3FjCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMdmP12SLTb1JMpxSaKtwDo8OkmlyhrXiqEuUm8vda4365LnwCbdtMjaEVs%2BB3fjY8J74s2MinGYImlA3mFFrqbpadiqlJBS4X6QOcqKE6cQanz2Q3DeSdwzh35xSWbJJh6pd7bpvKJZgYfOm8cAUYGAuLezPnG17e52p89E0vyd5zMq3eOiZwgbxi3PgZW1XzGZYOfAkPht%2F1Jpbx3q6QI1GP7J%2B39nc21UJqUQlijoRlRRAWelh%2Fp2I0me7jfb0DYd%2BtOP0a7ib69ssjYG9xEPKw24o1dVaI5wejQMLOPXCxxCQmqsn1P045gn9T79qXCeYR21oMx%2Bgz0lE%2FjE9Rr6UYd5tsr2tNp%2FvkaIN7XrRkSMy3y8jyri7DJCJw9%2F8YB2m4jC8sH6jLOYa9QuXVOlXUSECl2K30OUstEeVfFmaDjf%2Fv00k5yMRngYsFSNm5hg%2Fw0YSGOyCnD3ZQRkueV4zYXg1hdA1pRnv7tKxxMN2phxZsjcv3VlX7dE4f3wG1k87ZDWtySHp3WNRpXN3rVnD%2F9KkNT9fVx%2FM7sAzww3RDR15mPwseCzzwDQEktKlZ2hSjz9nDaoMfiOM05bR9Nj0IiVP0LrZC7A24zCn1wFNrcVtxtym4z1BJML%2F3lAXIJfmWI%2F8CT5FgVXow0L3CyQY6pgH0SHktWelmJp9WFpqZIFiETYuk6gMMqXeYncXEmcI2yLsQfKjTWt2IpcmhFSh1WVU0bkOWA6NMI8L6aD%2Bx9mi0viwU2J1KEy9BdDjHpfX6mq%2Bv%2B2SLitPpJmGYHwLf4RCU%2BYs7Rgz8PiwwlMbBXcwoEnfLi41QalYbrn1BwV%2FvLUAwwXE8gCY7GcS59BlLHFVlj7ASi783obtPFu1kZoGNjSUSmmU9&X-Amz-Signature=1fbd2ebb5d4781571f7bbc5b7bbb734edb36042787dcf1a0594defb2c5c0fc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7M4TGK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICt0yrcmG0LIwD%2FE%2BMywoRekxHlzn1VpA69sjkgQEYsUAiBGhb3QChXLi0mfFvlAkYR77kxS6qSNEE0E0NKbHJ3FjCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMdmP12SLTb1JMpxSaKtwDo8OkmlyhrXiqEuUm8vda4365LnwCbdtMjaEVs%2BB3fjY8J74s2MinGYImlA3mFFrqbpadiqlJBS4X6QOcqKE6cQanz2Q3DeSdwzh35xSWbJJh6pd7bpvKJZgYfOm8cAUYGAuLezPnG17e52p89E0vyd5zMq3eOiZwgbxi3PgZW1XzGZYOfAkPht%2F1Jpbx3q6QI1GP7J%2B39nc21UJqUQlijoRlRRAWelh%2Fp2I0me7jfb0DYd%2BtOP0a7ib69ssjYG9xEPKw24o1dVaI5wejQMLOPXCxxCQmqsn1P045gn9T79qXCeYR21oMx%2Bgz0lE%2FjE9Rr6UYd5tsr2tNp%2FvkaIN7XrRkSMy3y8jyri7DJCJw9%2F8YB2m4jC8sH6jLOYa9QuXVOlXUSECl2K30OUstEeVfFmaDjf%2Fv00k5yMRngYsFSNm5hg%2Fw0YSGOyCnD3ZQRkueV4zYXg1hdA1pRnv7tKxxMN2phxZsjcv3VlX7dE4f3wG1k87ZDWtySHp3WNRpXN3rVnD%2F9KkNT9fVx%2FM7sAzww3RDR15mPwseCzzwDQEktKlZ2hSjz9nDaoMfiOM05bR9Nj0IiVP0LrZC7A24zCn1wFNrcVtxtym4z1BJML%2F3lAXIJfmWI%2F8CT5FgVXow0L3CyQY6pgH0SHktWelmJp9WFpqZIFiETYuk6gMMqXeYncXEmcI2yLsQfKjTWt2IpcmhFSh1WVU0bkOWA6NMI8L6aD%2Bx9mi0viwU2J1KEy9BdDjHpfX6mq%2Bv%2B2SLitPpJmGYHwLf4RCU%2BYs7Rgz8PiwwlMbBXcwoEnfLi41QalYbrn1BwV%2FvLUAwwXE8gCY7GcS59BlLHFVlj7ASi783obtPFu1kZoGNjSUSmmU9&X-Amz-Signature=b19be2c5a38e18aa77c23cbb02e85767c58d15f8e3006904af29549b14395b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

