---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6E2TQE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6vrsWyNyE5bQArG4Tv5bmF4FClVEBiGtTJthTOzTqQIgOa1TJOjt9BozJOGviNaYlbcVVs3GbqpEFq9bB4Ln2%2FsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJA75XIn%2FEJ%2BCQ%2BwtyrcAxsJxMKx6FigrGmGfE876lc4JuCrjF0Aow2Z7vJyA%2B9HCqJf%2BKnZ21lwuiaUP1XawQvOBr3Yx6myV2Hb3FYZShU1zvEtcaPpXCXOGSUvlpIOUSHZ7R2sCzmkgq7MVAUTwdS7dA%2FRWtd1%2BqI0JPb86iT9HIAuQvujBhVLAm3sLuAHNPNdyiUAH%2F1ulYZly8WX%2BI2y0jppjSFXowUMJ6yClEEv6NLbfOnA191Rhy56gdDmpDJjHWQcaR1kQ%2BsavlgJqNV7sZQpREoWx0nYrYZ%2BiH3Wzxep1U8Y9aJOpV88V5IE1fb4B7joCpl2s7Y4RI8d2WYXK4h0Oby%2FWfRRysZgW05mBoqOMa51qYzxJrPVxHs80vF3hIvNopmGKdHaQjAArg6DiqLg6TmYFZTLBDMs2MqjDH5Aczs%2FFdqKx5JF0XMJOv%2BRzsUOCp9HaWTXTGEZHMhD40sjitxkzOWgUIr1BChBYXaQn01n4evcKi6f0J44UVLd1zbDfqf3Mqymu37l5hB5CTA550GgzXf4RQ5e7i27aFY%2FjUs4Tr%2BfX6CjZzJBRVwSULsGoQ8g1s4%2BVeKjreKJlZ9j%2FUKBkHy6b%2FARK5x8dQiULyMy2CKp5WLT7RllMfrjyajhZezZ7wqhMPSh2MkGOqUB1n4KKKBnrtUntOfXWGuSXyvt5A2mb0%2BQdl0RK%2ByVF9BooOhBnd5dVGzrjn74pzF%2B7BbXqPaYHTmFDr%2FSdOcTSaFDAtszPKT5f%2BWGqBEfPNLYFH%2B35zMYlpbBCj0u8qNRmC%2Bsdg9y%2BIba%2FhVnMmstalVsqC%2B7Dvo6qBTdXInadg%2FgwZyUTuPEAp%2F5ME2pu%2FnSRaIaIzxbDxkG8F4rPwQA9oI%2FChba&X-Amz-Signature=ee7928a8e70e428c5059d4cb729d4240684ca303214d35f8ce5c1ead691e5114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6E2TQE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6vrsWyNyE5bQArG4Tv5bmF4FClVEBiGtTJthTOzTqQIgOa1TJOjt9BozJOGviNaYlbcVVs3GbqpEFq9bB4Ln2%2FsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJA75XIn%2FEJ%2BCQ%2BwtyrcAxsJxMKx6FigrGmGfE876lc4JuCrjF0Aow2Z7vJyA%2B9HCqJf%2BKnZ21lwuiaUP1XawQvOBr3Yx6myV2Hb3FYZShU1zvEtcaPpXCXOGSUvlpIOUSHZ7R2sCzmkgq7MVAUTwdS7dA%2FRWtd1%2BqI0JPb86iT9HIAuQvujBhVLAm3sLuAHNPNdyiUAH%2F1ulYZly8WX%2BI2y0jppjSFXowUMJ6yClEEv6NLbfOnA191Rhy56gdDmpDJjHWQcaR1kQ%2BsavlgJqNV7sZQpREoWx0nYrYZ%2BiH3Wzxep1U8Y9aJOpV88V5IE1fb4B7joCpl2s7Y4RI8d2WYXK4h0Oby%2FWfRRysZgW05mBoqOMa51qYzxJrPVxHs80vF3hIvNopmGKdHaQjAArg6DiqLg6TmYFZTLBDMs2MqjDH5Aczs%2FFdqKx5JF0XMJOv%2BRzsUOCp9HaWTXTGEZHMhD40sjitxkzOWgUIr1BChBYXaQn01n4evcKi6f0J44UVLd1zbDfqf3Mqymu37l5hB5CTA550GgzXf4RQ5e7i27aFY%2FjUs4Tr%2BfX6CjZzJBRVwSULsGoQ8g1s4%2BVeKjreKJlZ9j%2FUKBkHy6b%2FARK5x8dQiULyMy2CKp5WLT7RllMfrjyajhZezZ7wqhMPSh2MkGOqUB1n4KKKBnrtUntOfXWGuSXyvt5A2mb0%2BQdl0RK%2ByVF9BooOhBnd5dVGzrjn74pzF%2B7BbXqPaYHTmFDr%2FSdOcTSaFDAtszPKT5f%2BWGqBEfPNLYFH%2B35zMYlpbBCj0u8qNRmC%2Bsdg9y%2BIba%2FhVnMmstalVsqC%2B7Dvo6qBTdXInadg%2FgwZyUTuPEAp%2F5ME2pu%2FnSRaIaIzxbDxkG8F4rPwQA9oI%2FChba&X-Amz-Signature=755e1f4edc3c8c6e87323806050f5803ffbbc504220e396d77e9777bbc38a980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

