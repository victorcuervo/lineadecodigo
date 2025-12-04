---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPZPYES%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDoayLpH39GOQUBjhaJGAX57jJMr7Xt4Jj0UE0hMNEAfQIhAPzOWhCexHVbuE7WFtMOLZHnHw%2FNkVF%2Bmi1Bs6BdgOA6Kv8DCEYQABoMNjM3NDIzMTgzODA1IgyNESarQ%2BCadJhwHh0q3AO6jCKcBJ0sVsOIsySUtim0RkYZesezRvN20jl5TB%2FUu7wXAQobOVv%2B0PsnAXEzS7fAjFlt3upEmbMuI0RPBZM%2F%2FZJMi8Kpi%2BV6AbKOMjAZNo%2F4f8dDtAv%2BgkiETT%2BW7nPUZHfRjftVLRgVXl5WR2IFyKamiAO9VLfAxKcs2PKeJrarRD6uZ985oREFR9r7kuIrtHHrV5yiQd0ivEg3CuDrSj1IUh80FrgPLbvlpJPMmg1u%2B%2Bx2MWVktA5jU5Pyy97CNhLzk9wnjtHX4pcBP4M1QEiHmcA6uFsSUFNY8M7tius8pSa63aiCWk%2FLhJxTCRs93Ekd69GYzV%2FqmGT2VRfyglIbxYtnH9akwH93Mah2%2B84Jq3AYaNIHPxAmZoVKN8x2Yt%2Buvk3xFxmeKRv42OVLeXiIzAlOkML8Swv6tu8ua25uq6Ml7eEOuOXIXww4xJFpxv6Z7bGUmXnowam%2FjGnfpo%2FUyjLAPpNGRmHFuxIV5HS7CQfJ2XTcF5SuftWov1TIKKnCP4nXGbBbuMU4wuumUliA6PqshKKYrTyV8CANWtSbcHA2iu2OczchaW3YcZN6IGwFO4sTIoIe3eO7aANviserpfam3209%2B6dyhDNOeyU63mDcHF%2F%2F0%2BePADDKg8bJBjqkARf8sM%2FCzLZpUT331fD4AE9C4uQ7LOhr5Cjr20azBZyjsiXUd2MX9DcxYcw2mnWnQ8OvUzUFjMzazsv4xTw4LhyhkHDUWji58q1X13MXNkPBmnKofPUqvcY1NtuNd9PxkRZQK%2FS%2B%2Fg%2FcGou0D054q49Ll%2Bef9yKWnqY2j72bpK38XAViPyqFzKfS4G%2FmJXuiowF%2F5WjBJEQ4Vc9Z%2BE034HKYEhTJ&X-Amz-Signature=ab3ceda423f2602ff8e0b9d9e4b3522b61b77fbf1e198da0389316dfcb52546c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPZPYES%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDoayLpH39GOQUBjhaJGAX57jJMr7Xt4Jj0UE0hMNEAfQIhAPzOWhCexHVbuE7WFtMOLZHnHw%2FNkVF%2Bmi1Bs6BdgOA6Kv8DCEYQABoMNjM3NDIzMTgzODA1IgyNESarQ%2BCadJhwHh0q3AO6jCKcBJ0sVsOIsySUtim0RkYZesezRvN20jl5TB%2FUu7wXAQobOVv%2B0PsnAXEzS7fAjFlt3upEmbMuI0RPBZM%2F%2FZJMi8Kpi%2BV6AbKOMjAZNo%2F4f8dDtAv%2BgkiETT%2BW7nPUZHfRjftVLRgVXl5WR2IFyKamiAO9VLfAxKcs2PKeJrarRD6uZ985oREFR9r7kuIrtHHrV5yiQd0ivEg3CuDrSj1IUh80FrgPLbvlpJPMmg1u%2B%2Bx2MWVktA5jU5Pyy97CNhLzk9wnjtHX4pcBP4M1QEiHmcA6uFsSUFNY8M7tius8pSa63aiCWk%2FLhJxTCRs93Ekd69GYzV%2FqmGT2VRfyglIbxYtnH9akwH93Mah2%2B84Jq3AYaNIHPxAmZoVKN8x2Yt%2Buvk3xFxmeKRv42OVLeXiIzAlOkML8Swv6tu8ua25uq6Ml7eEOuOXIXww4xJFpxv6Z7bGUmXnowam%2FjGnfpo%2FUyjLAPpNGRmHFuxIV5HS7CQfJ2XTcF5SuftWov1TIKKnCP4nXGbBbuMU4wuumUliA6PqshKKYrTyV8CANWtSbcHA2iu2OczchaW3YcZN6IGwFO4sTIoIe3eO7aANviserpfam3209%2B6dyhDNOeyU63mDcHF%2F%2F0%2BePADDKg8bJBjqkARf8sM%2FCzLZpUT331fD4AE9C4uQ7LOhr5Cjr20azBZyjsiXUd2MX9DcxYcw2mnWnQ8OvUzUFjMzazsv4xTw4LhyhkHDUWji58q1X13MXNkPBmnKofPUqvcY1NtuNd9PxkRZQK%2FS%2B%2Fg%2FcGou0D054q49Ll%2Bef9yKWnqY2j72bpK38XAViPyqFzKfS4G%2FmJXuiowF%2F5WjBJEQ4Vc9Z%2BE034HKYEhTJ&X-Amz-Signature=a87a4cb3b16c9aa145f815dc48aaa0baec586695f8373efaa56bdbe4df906852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

