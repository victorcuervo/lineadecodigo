---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK257SSJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGL5vjY5bo8P5yLhYufULYxqJU%2FofLXS4ejTDJjYyTkgIgAO56lIA8blV80B3E65P%2Fx2O1kJwjcZQzUJEx4T7YAWAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMnvI%2FqRreCNILVyrcA8y1FW2lsGTXscxeVc56fK2%2Fd3q2CCOzMZh35%2Fqu0xLFE9Kv6g0RW7wOYyfqiWNXbrBHF%2Fjdj74XbU00rb5w1gAxPpVNMAZI6DP89ASaLajK6B0nnAFJisdGHCbSLAKz%2BMroFaKFoO7H9w%2B1Z0ToBsRWkTqwdb7xgWk30KZksM9kjnd4yokO%2Fpx7JmUD7V5JN0iPlVvEMK%2FvQn3A2f6YMMdcUsgx8fjrcZA%2BhiK%2B9uCefRmEPyEMOQernfs09VC2c%2BqUUs8JEc4fPcVs9OhQnL5NKu%2BUvEJ4qRseAgmQ7Z6FC7qSAoVm2Rl265DRMCpHzc%2FJLqkZGNerjJHeIeHVPkE1Piv1WO%2BSWYRugxrYLm2iZ81%2B8GmsIXsh%2FU53YMex5qOsETVgtbXDutHie1ueUYJ2vFyWGNFS0PL6jcVKxZIOEYeM0EbQQL4Fpaslqqax6pEuqFwmFpkPSA3%2BRc9fm7V3YS6CjHGoKsKW3VJB9C185oApk3ik7bcsiL2U5yYWqNT7tbnIwJ1O1%2Fnfwy4RwyF1W4RaXBZn71OWhscOtN8hFbarkOfMTfxWuH%2BzB7cnwzUqCMwFCsuVft%2FYwl913EHo1qc96UDQaiUTHhT%2BlbxLtVNJowU4dR1pRFyXMO3G18kGOqUB%2BXWZhmQB0sroHIEzrAFmz9diH5LqfiRE5IdUado6IEdp3%2Bk6Jgew30m4l%2Fl1vmU8YaRyLq5YZSdYsnoXHZhs1O2WEPOfiYXT3C3N264bYyGC42zHsTAV14Yhon0kZuXHuaevWUn5Ek1rYcIYX1uYgjFWh5XXlgpd3KzFgSVAA%2BY6vKUJgM3MPrbQLk1AlHu2Z8lKueN5L%2BDNEcxvC8w71fEGH5YP&X-Amz-Signature=f83c4515287e03391d877970dd225512d0d81fe9d68ac1f1578a100af2a58110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK257SSJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGL5vjY5bo8P5yLhYufULYxqJU%2FofLXS4ejTDJjYyTkgIgAO56lIA8blV80B3E65P%2Fx2O1kJwjcZQzUJEx4T7YAWAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAMnvI%2FqRreCNILVyrcA8y1FW2lsGTXscxeVc56fK2%2Fd3q2CCOzMZh35%2Fqu0xLFE9Kv6g0RW7wOYyfqiWNXbrBHF%2Fjdj74XbU00rb5w1gAxPpVNMAZI6DP89ASaLajK6B0nnAFJisdGHCbSLAKz%2BMroFaKFoO7H9w%2B1Z0ToBsRWkTqwdb7xgWk30KZksM9kjnd4yokO%2Fpx7JmUD7V5JN0iPlVvEMK%2FvQn3A2f6YMMdcUsgx8fjrcZA%2BhiK%2B9uCefRmEPyEMOQernfs09VC2c%2BqUUs8JEc4fPcVs9OhQnL5NKu%2BUvEJ4qRseAgmQ7Z6FC7qSAoVm2Rl265DRMCpHzc%2FJLqkZGNerjJHeIeHVPkE1Piv1WO%2BSWYRugxrYLm2iZ81%2B8GmsIXsh%2FU53YMex5qOsETVgtbXDutHie1ueUYJ2vFyWGNFS0PL6jcVKxZIOEYeM0EbQQL4Fpaslqqax6pEuqFwmFpkPSA3%2BRc9fm7V3YS6CjHGoKsKW3VJB9C185oApk3ik7bcsiL2U5yYWqNT7tbnIwJ1O1%2Fnfwy4RwyF1W4RaXBZn71OWhscOtN8hFbarkOfMTfxWuH%2BzB7cnwzUqCMwFCsuVft%2FYwl913EHo1qc96UDQaiUTHhT%2BlbxLtVNJowU4dR1pRFyXMO3G18kGOqUB%2BXWZhmQB0sroHIEzrAFmz9diH5LqfiRE5IdUado6IEdp3%2Bk6Jgew30m4l%2Fl1vmU8YaRyLq5YZSdYsnoXHZhs1O2WEPOfiYXT3C3N264bYyGC42zHsTAV14Yhon0kZuXHuaevWUn5Ek1rYcIYX1uYgjFWh5XXlgpd3KzFgSVAA%2BY6vKUJgM3MPrbQLk1AlHu2Z8lKueN5L%2BDNEcxvC8w71fEGH5YP&X-Amz-Signature=98149944b4ebf006bc6eb87a6eb9520cacf136d1d97f8903ec69308217d01f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

