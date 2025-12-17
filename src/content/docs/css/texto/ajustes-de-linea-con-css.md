---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOJFK7Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwVfxg5CaAf6XxEsWD265wVpk3%2BwL8jaq0UFB6rIrUpAiEA77IiUfqtR1SEfAVXZjY%2BZaz2W2j82S0rWqOeKSMgCy0q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLVxPVkyrEylWd73xyrcA%2B%2BPK88WOiO8dZCk3%2BktThUpfrzT52dXNzYwpz9kkwHKDEav0IKA4TaLBm41RIVBZts35x61pjzOaeSfz6yCtOowjYCkNqS4lZsbV2TGgOtL0AmujwHvBMTqfnrO0S1%2Bnv7AwarIIauKa2Y3CpxnFkjLpK2VdIUqrwqM1LO38BOUlW%2FnDCCG7G%2BHpx1ij0bw1Igli%2B88DgyI66oOEwwUo2sRxnL9GkQ01S5zqfOwoA02gQncSKSZFA%2FOuXf5aVL2ON8xiCZ%2FxIi%2FO6rBgj4wihcT3O1a3XMWvVRzA6lx04HfUGjXhtZyF7kcO7YQDPQYhMZ4EnJxlTDwMtwT7N0oLF9u23Nzj8wl1pRZWVgFjTdH15Xskyu7p%2BuWL26uDa%2FhYCUKoRy%2FL6PM29O2RRBWSYl1p3Xn7OdhiUO4%2FjEOaKHO0fTPTV1y%2F4G76%2FJSjeFxgHomkTNQZjtDY2KZjaqBbnopChRZLHL3eU4oUCzuzPNl5Ze3fEp4HayoMw%2F0CBiGtuKmEVflbqPTT09XiSoLGRF4LGbRLGj4L89q5aG7DcyM%2F3h7hNw3qKZGVIER5pNrc6kUatqamKVN23rUpShUSoCaJdDiLgq%2BvQg6UNs1iXgHfUKNJHV8CUiwHsFpMJ%2FRicoGOqUBv8B%2BHw7LIMuxfAak8gsSrE5%2FC6DgdtFUy2jNcAbSrT%2BJ1tkgJGaAB%2BxGlJRfKslPVkpgFOMBF4JkVWbtA5%2F3GoquKf1l4Cd74ZbeZOFL8SRw6fO6Nsj%2FScdrlBow%2Bo6UocSfxrkPUF0xOUiYaJtK4A%2BXJt%2FVinbQw4vdoo%2BoN%2Fkg8cHcvwOGijU%2BJ3yL1%2FsoKhM2HNKFLhFl8wkkFfusQuzmIgYD&X-Amz-Signature=dbca3a1479ac144c5410dfba8289465f7a683d8587bbfcb16f71639a4850150b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOJFK7Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwVfxg5CaAf6XxEsWD265wVpk3%2BwL8jaq0UFB6rIrUpAiEA77IiUfqtR1SEfAVXZjY%2BZaz2W2j82S0rWqOeKSMgCy0q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLVxPVkyrEylWd73xyrcA%2B%2BPK88WOiO8dZCk3%2BktThUpfrzT52dXNzYwpz9kkwHKDEav0IKA4TaLBm41RIVBZts35x61pjzOaeSfz6yCtOowjYCkNqS4lZsbV2TGgOtL0AmujwHvBMTqfnrO0S1%2Bnv7AwarIIauKa2Y3CpxnFkjLpK2VdIUqrwqM1LO38BOUlW%2FnDCCG7G%2BHpx1ij0bw1Igli%2B88DgyI66oOEwwUo2sRxnL9GkQ01S5zqfOwoA02gQncSKSZFA%2FOuXf5aVL2ON8xiCZ%2FxIi%2FO6rBgj4wihcT3O1a3XMWvVRzA6lx04HfUGjXhtZyF7kcO7YQDPQYhMZ4EnJxlTDwMtwT7N0oLF9u23Nzj8wl1pRZWVgFjTdH15Xskyu7p%2BuWL26uDa%2FhYCUKoRy%2FL6PM29O2RRBWSYl1p3Xn7OdhiUO4%2FjEOaKHO0fTPTV1y%2F4G76%2FJSjeFxgHomkTNQZjtDY2KZjaqBbnopChRZLHL3eU4oUCzuzPNl5Ze3fEp4HayoMw%2F0CBiGtuKmEVflbqPTT09XiSoLGRF4LGbRLGj4L89q5aG7DcyM%2F3h7hNw3qKZGVIER5pNrc6kUatqamKVN23rUpShUSoCaJdDiLgq%2BvQg6UNs1iXgHfUKNJHV8CUiwHsFpMJ%2FRicoGOqUBv8B%2BHw7LIMuxfAak8gsSrE5%2FC6DgdtFUy2jNcAbSrT%2BJ1tkgJGaAB%2BxGlJRfKslPVkpgFOMBF4JkVWbtA5%2F3GoquKf1l4Cd74ZbeZOFL8SRw6fO6Nsj%2FScdrlBow%2Bo6UocSfxrkPUF0xOUiYaJtK4A%2BXJt%2FVinbQw4vdoo%2BoN%2Fkg8cHcvwOGijU%2BJ3yL1%2FsoKhM2HNKFLhFl8wkkFfusQuzmIgYD&X-Amz-Signature=d3845bd8a6539df699bcf7d86cc8fc1dc8cb1637c1882ad568f37afd41d23b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

