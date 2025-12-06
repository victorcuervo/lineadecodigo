---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV7WZU5D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3bvvp81FY1YMU%2FKHBTgQncUJuSYcX03HTvC4TAgGspwIgBQ2sFHI9Jw2u4rIjJ5axcN%2FXvYWXCEBbv5NTsuV3Svkq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEyC6S83WYkVH259FircA%2BIgN22s%2Bk9sd4CxJehujXbNzIx%2F%2BLgH5XC11ZEr7AOTA37pGE%2BQqGAz%2BgGEjXrfgwe9l7VngJUf4QmbjOkWlCwXBs38QtWfdOjNgJDTz2mR3RdRNPm2OjkywhsqfvMXH2%2BxnLkHFt0dNo14WFXEEkn4rqjWVKleVJUcWGilT1MVHvWdkC3hpYkhgS0BDvcHWI%2BVgrOvOLRLaicD4LeBlv1%2BOSlXJaj517oVWQ9%2BKtIH4uFWvmdBhZl84%2BT3RUQK2gsibPf0OD7EP5kXHbu4CgCF0fx5R0SBC2ibo0r5weL7dgfTIQW4DeyX%2FjY90EcoWX840XCi9hxWYmBetHlseQ5Pf70kS94F98220%2BVJlOdXyPlmo9u%2FZoo21AcsUKO%2B4NCRxXbGaKlLuIPulWcoY4CFjDkqIEXHkLAgT6ve754kHJ92szy2SovvxcFBwD9KhBpMOf386HqBErhdRI9Ep90MgM5qg0p8%2Fkcjr4EawCnO0gH73Jg3jMKhfyzo2duPYGzq7LPao3krPSyJWYUjRUScKqQMvBaS2exrPKHAk6bNjjyTn8VRFzvzlKFOsQBA4iaORmIrrrOw29vgU6DIYMoUtZ85cloUS0jp9gooRVPg2KInJjK8kHaQlS%2FgMPPozckGOqUBRud8p3Ot1mBj8C4FwfcmDWKXkQdc662n7OCsKeFQ4yWzBcn34FdeD3OeKzSZHyjlzu9pNw7M1dFUWOXovitX0f8hcQ9Dn0BSdnXkvJ3LaiqhgmYuZ%2BfZigJ1WRgD2RXZQfwLnGg3k9IkUyTievFiZ69x5T7JsgD6Tu4gIce4bulDt1BxUeJvDFyDW%2Ft4VMR6NEkJo8pV9zpJAHYlZ2of8%2FPQ%2BzcK&X-Amz-Signature=230968276f3fad7d2fc5e201a1724a2bc9a3a40bde3a85f6cf2f94c6a604a975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV7WZU5D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3bvvp81FY1YMU%2FKHBTgQncUJuSYcX03HTvC4TAgGspwIgBQ2sFHI9Jw2u4rIjJ5axcN%2FXvYWXCEBbv5NTsuV3Svkq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEyC6S83WYkVH259FircA%2BIgN22s%2Bk9sd4CxJehujXbNzIx%2F%2BLgH5XC11ZEr7AOTA37pGE%2BQqGAz%2BgGEjXrfgwe9l7VngJUf4QmbjOkWlCwXBs38QtWfdOjNgJDTz2mR3RdRNPm2OjkywhsqfvMXH2%2BxnLkHFt0dNo14WFXEEkn4rqjWVKleVJUcWGilT1MVHvWdkC3hpYkhgS0BDvcHWI%2BVgrOvOLRLaicD4LeBlv1%2BOSlXJaj517oVWQ9%2BKtIH4uFWvmdBhZl84%2BT3RUQK2gsibPf0OD7EP5kXHbu4CgCF0fx5R0SBC2ibo0r5weL7dgfTIQW4DeyX%2FjY90EcoWX840XCi9hxWYmBetHlseQ5Pf70kS94F98220%2BVJlOdXyPlmo9u%2FZoo21AcsUKO%2B4NCRxXbGaKlLuIPulWcoY4CFjDkqIEXHkLAgT6ve754kHJ92szy2SovvxcFBwD9KhBpMOf386HqBErhdRI9Ep90MgM5qg0p8%2Fkcjr4EawCnO0gH73Jg3jMKhfyzo2duPYGzq7LPao3krPSyJWYUjRUScKqQMvBaS2exrPKHAk6bNjjyTn8VRFzvzlKFOsQBA4iaORmIrrrOw29vgU6DIYMoUtZ85cloUS0jp9gooRVPg2KInJjK8kHaQlS%2FgMPPozckGOqUBRud8p3Ot1mBj8C4FwfcmDWKXkQdc662n7OCsKeFQ4yWzBcn34FdeD3OeKzSZHyjlzu9pNw7M1dFUWOXovitX0f8hcQ9Dn0BSdnXkvJ3LaiqhgmYuZ%2BfZigJ1WRgD2RXZQfwLnGg3k9IkUyTievFiZ69x5T7JsgD6Tu4gIce4bulDt1BxUeJvDFyDW%2Ft4VMR6NEkJo8pV9zpJAHYlZ2of8%2FPQ%2BzcK&X-Amz-Signature=7a056998f3b4ab75216e4c5826c477d00e6858f909a3ac18d89a0f0ed7ec475c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

