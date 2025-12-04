---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC6NWJHU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFJ71sX7TZlGhnOM4KpN7hQ0pJAkWjnUwF0zCNyY6bB3AiAS2S0C6CdwbDUmB59wE77JOZ819qsghTwK1YYDh65UpSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMIslzm5qw0L20F5%2B%2FKtwDWXKJmf5HwTR%2BwAyv7Et2QXQelIiiFG3IGr8B4udyr6CzjV6WQXlMCyMxGKqq8FDpCutQ3GMUkL16%2FsnEYl%2Febrp5jKb2rcRZtgHWP%2Bl98LyraHiGRqV%2Bor4rPhGzXigpCuNoXHbL%2FRfd%2BijwGeJZXLf52Qtnqkx%2F%2F21bSBnnh4YKUTigD63ASNBX0Tg836eCN6MvR%2BJX%2F%2BmDoQUsuLhEQ4A1DU9ec%2BjO1qHeArKjuZhxTB4qfcCPPVfuBF8mFemZs8OQdLCbMpZsfqaYm0Fe4BK2tc8dQJQHAOvUL1B5UOuGZqkkdB79JFQCHX%2B8Qzy0ohcLR2pYkrDUZbGzK%2F1LuFcdhRjqK6jR4m%2BZSpILE5kXQvfbhG88dW4wrelHoY6Zu7LWXJ0W0nk71qfRttR33I14gjkpjrVpudLFCWs5w2ZYsRGgq8GtpnFgBWeJJkG%2BZiEDShR1v3BYo%2F%2FG%2Br9KjdEn61IumexK7%2FjoOwE4g%2Bczp7UIic%2FRQDkG7X0kru5nDRtrWNg68VH%2BHhZ32G0C65IIMibVFV3X0S5dSS9hkVr7V6HfDWuZZKJ9pn9FjOp050hji%2B9Ls9W%2BELBXrOfi7Ty%2FXrXFH2gNFbFy2MbcxGQ7CVQ0DUToujqgpX8wo4PGyQY6pgHrzdNFjD8EwfQZ7AXFJCm7v7T4KUvQ6UsVjEmW7gzGNBrDmOZndMbnEbYzkrHIplM5WRyVSw7rruUMKL4eq6Nukt7v%2FGFLW%2BNtem2J5fbpsVcHgEBaWM%2FAOuV0loit5BOVHd4ibWl0htXNTDmJxLAwu7JtexBQ7ifVsp4KTZB%2FepOIpi5DKumfbHgkVTCoFTGSrwO%2F6tjOikZRxNmo3dLcSi%2FIOnfW&X-Amz-Signature=5c660f34bee776622a991601d46665f164609d67ac660ab7dc437516523a6f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC6NWJHU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFJ71sX7TZlGhnOM4KpN7hQ0pJAkWjnUwF0zCNyY6bB3AiAS2S0C6CdwbDUmB59wE77JOZ819qsghTwK1YYDh65UpSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMIslzm5qw0L20F5%2B%2FKtwDWXKJmf5HwTR%2BwAyv7Et2QXQelIiiFG3IGr8B4udyr6CzjV6WQXlMCyMxGKqq8FDpCutQ3GMUkL16%2FsnEYl%2Febrp5jKb2rcRZtgHWP%2Bl98LyraHiGRqV%2Bor4rPhGzXigpCuNoXHbL%2FRfd%2BijwGeJZXLf52Qtnqkx%2F%2F21bSBnnh4YKUTigD63ASNBX0Tg836eCN6MvR%2BJX%2F%2BmDoQUsuLhEQ4A1DU9ec%2BjO1qHeArKjuZhxTB4qfcCPPVfuBF8mFemZs8OQdLCbMpZsfqaYm0Fe4BK2tc8dQJQHAOvUL1B5UOuGZqkkdB79JFQCHX%2B8Qzy0ohcLR2pYkrDUZbGzK%2F1LuFcdhRjqK6jR4m%2BZSpILE5kXQvfbhG88dW4wrelHoY6Zu7LWXJ0W0nk71qfRttR33I14gjkpjrVpudLFCWs5w2ZYsRGgq8GtpnFgBWeJJkG%2BZiEDShR1v3BYo%2F%2FG%2Br9KjdEn61IumexK7%2FjoOwE4g%2Bczp7UIic%2FRQDkG7X0kru5nDRtrWNg68VH%2BHhZ32G0C65IIMibVFV3X0S5dSS9hkVr7V6HfDWuZZKJ9pn9FjOp050hji%2B9Ls9W%2BELBXrOfi7Ty%2FXrXFH2gNFbFy2MbcxGQ7CVQ0DUToujqgpX8wo4PGyQY6pgHrzdNFjD8EwfQZ7AXFJCm7v7T4KUvQ6UsVjEmW7gzGNBrDmOZndMbnEbYzkrHIplM5WRyVSw7rruUMKL4eq6Nukt7v%2FGFLW%2BNtem2J5fbpsVcHgEBaWM%2FAOuV0loit5BOVHd4ibWl0htXNTDmJxLAwu7JtexBQ7ifVsp4KTZB%2FepOIpi5DKumfbHgkVTCoFTGSrwO%2F6tjOikZRxNmo3dLcSi%2FIOnfW&X-Amz-Signature=ab7347b1e1f43f80266885b2cdf35a4bfe8974765e4958f32384bc4b8c844e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

