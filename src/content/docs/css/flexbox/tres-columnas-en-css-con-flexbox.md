---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DJVYZG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1fJXBPxA2SXF4ZHA8wewNu8CfF6YVJ17Z%2FXpAkj7bRAIgR5w6SSkmoh3yHR7f6sFX4c2LJqE0FehuBX5gbnbnfAEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBWGeXeWG4UbFYoPvircA5p%2FiEy4iljwWxS7OTbbtiBhleuLCm4mv9G%2BK6pv4teBxhrhXIM0HOGlsv3gSBDJEeMUlvWkfv2iSg9DoWwno%2FSp7z9Gmumeke6Jce5%2BKxu%2Bi1TkbkV%2FjPsaWd4oA5JrIZlpo9508TIkAfeuQqO%2FE%2FKyrgvfG55CrdUNV6sLMxEv2iwcAUvt%2Fjo0oiyd4p2vlEH17oTRmgJlpDsBqHifJJIFzL5MNmWdwDNMx7nAQmR0KelBtu5RE5PvsRiiPNHCDp8kydFI%2FRBwuf6Ch2GBPioEpVQw%2BR%2ByGSdHA%2FZRT%2BVTMO3P1S0ApgqR33%2BJ9pqZJ1ALJYGEZZyURDQZ7aaQ4eoA%2FUcb6kLuduywTeLLcf9uW8gmeOrM%2FjD3iirBkl3nDdsdyA29OldFkR8T6IuBoCJnqkSGNsHwU2RS0uIo9vVNguc5%2FTWZkOBTUhl%2FxUaqd%2B8LzUuOWV8e9B0iBx%2FIc%2B6HH5zBSWRbXagK0xcsfcEqoxqg6LeeaS2zjR0CB1QQfT%2FCGAhX31HpDzWvoIjN6PjFc1o5TbZ0RG4E%2FXWecxdTHLIx9%2BaONJgiIzp%2Fk74PnHOLBgW%2Bqb96X3LckR6Ba%2Fz0iifUB4RS7r52%2F2fx%2FJffBQlMnHROiJA%2FoQGKMJzry8kGOqUBykjwXz5Wdf2%2FTyLUKu04qbpgl4LM38eFbqlI9u%2FS2pPT5JoE%2F5GBr%2FCgh7BrCGtP1c7%2BdFMJXr3uwOQXXr4jbuZp4dSTmZkTEk2%2FTYZrf%2F8GcFASURQpV4jhat1fVdbYdt1MdlYuXpY1kZtq2AaNjeB5xOOEEvGBhHZJkgkyDbLUoc47XKkl6B78HkryQE%2FnNMfwujkRWYwiiEXuAgobbaBuCo9n&X-Amz-Signature=6244b64a1c900f6fd1c07be7a5e0775d3bf4c7ef63d23568851738f27ca89c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DJVYZG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1fJXBPxA2SXF4ZHA8wewNu8CfF6YVJ17Z%2FXpAkj7bRAIgR5w6SSkmoh3yHR7f6sFX4c2LJqE0FehuBX5gbnbnfAEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBWGeXeWG4UbFYoPvircA5p%2FiEy4iljwWxS7OTbbtiBhleuLCm4mv9G%2BK6pv4teBxhrhXIM0HOGlsv3gSBDJEeMUlvWkfv2iSg9DoWwno%2FSp7z9Gmumeke6Jce5%2BKxu%2Bi1TkbkV%2FjPsaWd4oA5JrIZlpo9508TIkAfeuQqO%2FE%2FKyrgvfG55CrdUNV6sLMxEv2iwcAUvt%2Fjo0oiyd4p2vlEH17oTRmgJlpDsBqHifJJIFzL5MNmWdwDNMx7nAQmR0KelBtu5RE5PvsRiiPNHCDp8kydFI%2FRBwuf6Ch2GBPioEpVQw%2BR%2ByGSdHA%2FZRT%2BVTMO3P1S0ApgqR33%2BJ9pqZJ1ALJYGEZZyURDQZ7aaQ4eoA%2FUcb6kLuduywTeLLcf9uW8gmeOrM%2FjD3iirBkl3nDdsdyA29OldFkR8T6IuBoCJnqkSGNsHwU2RS0uIo9vVNguc5%2FTWZkOBTUhl%2FxUaqd%2B8LzUuOWV8e9B0iBx%2FIc%2B6HH5zBSWRbXagK0xcsfcEqoxqg6LeeaS2zjR0CB1QQfT%2FCGAhX31HpDzWvoIjN6PjFc1o5TbZ0RG4E%2FXWecxdTHLIx9%2BaONJgiIzp%2Fk74PnHOLBgW%2Bqb96X3LckR6Ba%2Fz0iifUB4RS7r52%2F2fx%2FJffBQlMnHROiJA%2FoQGKMJzry8kGOqUBykjwXz5Wdf2%2FTyLUKu04qbpgl4LM38eFbqlI9u%2FS2pPT5JoE%2F5GBr%2FCgh7BrCGtP1c7%2BdFMJXr3uwOQXXr4jbuZp4dSTmZkTEk2%2FTYZrf%2F8GcFASURQpV4jhat1fVdbYdt1MdlYuXpY1kZtq2AaNjeB5xOOEEvGBhHZJkgkyDbLUoc47XKkl6B78HkryQE%2FnNMfwujkRWYwiiEXuAgobbaBuCo9n&X-Amz-Signature=7821ba8e58856c3dd9eb835916d785880483ac523f839e5f79be444e144c853a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

