---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PMM3DJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCt1FUUmD3mZWidRsWSNIG%2B3W0IVi7jmGUzpVsGUFqyUwIhAIeH8ao4XTO2TRzT7DEQax6iiY8nZ4Vtfmx%2BLwUTsGffKv8DCDwQABoMNjM3NDIzMTgzODA1IgzSmXrsFFRSuqluY5Uq3ANrqI0i43k2S7g7PrnZixwH12pzE9PSQQk3iPiP9lYR%2FEaJHXpjJMq6ISr8eFA5sCaTbirIsTQ1FyeCOmEF9hhqISZ301kEg9GaFAl%2FPoqQZ42Kn92kMvNS6YAiexscpH4QsPIl2jh2LWteR%2B0FGvW0X6BweLDt2ZYjot2WEsVrtnKbErEXwkh5kI00AoltTowNb5JFTIcC7GWz4dC0YbVdQYTAYNvTtPel10XZvE3JQs%2Bq3CMGw6lB8KDIOCJgcmBlq%2B7bZXSgLV3CnTxvLC2HkUzUt0N1BGpAhKrONJx1nenaEUXKYWdzWnoRt3R6j8IIlUC5fNgx6IM7nwu7J6LOhyrJvZ%2FOIoFF7nfAYnJ2iOofpt7M2%2BsRmC2WuIBZqF6hWEpPS1eAcVhEEeerfxeakHKz5hoGyaj93N%2BugsUl67vLTeZ9CVyGlb%2BpuQNVqN%2FO0%2BZxJ9UxRvSQXpGuFQKDAwE63RaMxJuutkSeiZ%2BafIj1rDiWZxHpPPFzTBvCgZtwDRbrKH2jkGe9kX9VzJKNeQgyCvHovITrPZfum8HNk%2FCVEK1wJM20x%2Bsc%2B2PF016FyxMIwUKooLISeRaxXqMB7%2FZ6cDaPBxgVhAe%2FahYa5aVzJBfoSw%2BeUlbe%2BDCD9cPJBjqkAQhsWJD%2F8MZi7bJiofZqVruAYQ5CXv657Suy4vjMSB886zcsuc8tRgTEk0yjqs22aLfWZyC2JWh9USKLNGJxFHRIwcb1sLXCCHa4tQ2f%2FH5%2BnVlWR1WnhbEnF8V1zk1k5ckq0R5eWQMmrmkIGYp5C71%2FdywP%2BvVIOLeg8GcIDoNuFUBaeMe5Eb077u0W6n5yA7Q7UbTYJt2yrai9%2BY77yOc7qiSq&X-Amz-Signature=c039b84efd55da1f3aec12c856260380138183769d489d4b84767c3f15cf44c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PMM3DJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCt1FUUmD3mZWidRsWSNIG%2B3W0IVi7jmGUzpVsGUFqyUwIhAIeH8ao4XTO2TRzT7DEQax6iiY8nZ4Vtfmx%2BLwUTsGffKv8DCDwQABoMNjM3NDIzMTgzODA1IgzSmXrsFFRSuqluY5Uq3ANrqI0i43k2S7g7PrnZixwH12pzE9PSQQk3iPiP9lYR%2FEaJHXpjJMq6ISr8eFA5sCaTbirIsTQ1FyeCOmEF9hhqISZ301kEg9GaFAl%2FPoqQZ42Kn92kMvNS6YAiexscpH4QsPIl2jh2LWteR%2B0FGvW0X6BweLDt2ZYjot2WEsVrtnKbErEXwkh5kI00AoltTowNb5JFTIcC7GWz4dC0YbVdQYTAYNvTtPel10XZvE3JQs%2Bq3CMGw6lB8KDIOCJgcmBlq%2B7bZXSgLV3CnTxvLC2HkUzUt0N1BGpAhKrONJx1nenaEUXKYWdzWnoRt3R6j8IIlUC5fNgx6IM7nwu7J6LOhyrJvZ%2FOIoFF7nfAYnJ2iOofpt7M2%2BsRmC2WuIBZqF6hWEpPS1eAcVhEEeerfxeakHKz5hoGyaj93N%2BugsUl67vLTeZ9CVyGlb%2BpuQNVqN%2FO0%2BZxJ9UxRvSQXpGuFQKDAwE63RaMxJuutkSeiZ%2BafIj1rDiWZxHpPPFzTBvCgZtwDRbrKH2jkGe9kX9VzJKNeQgyCvHovITrPZfum8HNk%2FCVEK1wJM20x%2Bsc%2B2PF016FyxMIwUKooLISeRaxXqMB7%2FZ6cDaPBxgVhAe%2FahYa5aVzJBfoSw%2BeUlbe%2BDCD9cPJBjqkAQhsWJD%2F8MZi7bJiofZqVruAYQ5CXv657Suy4vjMSB886zcsuc8tRgTEk0yjqs22aLfWZyC2JWh9USKLNGJxFHRIwcb1sLXCCHa4tQ2f%2FH5%2BnVlWR1WnhbEnF8V1zk1k5ckq0R5eWQMmrmkIGYp5C71%2FdywP%2BvVIOLeg8GcIDoNuFUBaeMe5Eb077u0W6n5yA7Q7UbTYJt2yrai9%2BY77yOc7qiSq&X-Amz-Signature=69717a75a11a337a7a7804e0eec9895f71d56889f896d2cc068ab609b836c109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

