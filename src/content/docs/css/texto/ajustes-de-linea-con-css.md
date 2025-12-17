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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6RLIO6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyUD3OE%2FJ1U6p%2FLcEmxtVD3nJ7F4VWMfVt8SlC5ofbjQIhALNo02bfZC3v2cc9HZ7q5MZBAWZrdqV5VSOpjKR35joSKv8DCHwQABoMNjM3NDIzMTgzODA1IgwaYSwKJxt8%2BA0U4M0q3APYISvGTn0OvnqsjVckirbSXGh3ahlHZqnx2cr%2BaTfHJDs53OKuh1m9zan5Bz8C98xJCaW3B3dRaB2e9fkJZ3C5LFHQnxq5Bg%2FRAROTTWJsEFqBw97nwEqkmoEM2u4%2Birv8Llm1Vl1ILeHmL4S8CyU3pLshOSKMWs1wEdlWkzFBDwmkcVqNoSktRjZ1UnjUd5%2Fp4%2Fzy0lxbH0c8VjiVwpOG%2BLJOUMvOVSuY%2B3%2B55D4g%2FnlIX0QjWjJCvSF1b%2Fa%2BM8t1gkZY2bhtu4MZ9ig0slStwRct2o3JTHm7jlNcDqbeu06oTrySRoLTyo71lS6OqWntYb56a%2BYNPUeYeUzts8Eos%2F7r6WgRIGat6HV6LvN%2FTO0I68qrl7xQo23ylBZs6%2B%2BhNIqDMVXIMWRD2tgJX56mNbkPdOWPZVoZIl4jA3qe2zwXKV%2BjWy66jnQvHxagmNSNoLv8Q4jdKVvMfgefSMplXqr5un5au9pcoxT0OOaeTd6M03bKsTK5%2BXbbkfDoYBr7H69h1ZX6onSAyOHevxips51ImUzX9NbfjeOf3ImuUVJO6k5kPsu5aaG7e8%2BNDvQq8HRvd1LSUQ4aG2p4HZMh7eVPphkNs%2Bn3ksYg9K7Mrnxp%2FsBiEXQpW0jNdjCnj4rKBjqkAbv%2B9s8DULCEs%2F%2FOe94xrrlW7JwKPs%2FRrlC6v%2Bpn7vIX2vVWxExeKFY45NjjPrrAZfV3RpJ3eGbEaTpxlu50UHbiWzkp%2Bl5khPNDdDgJAveH%2FrZlQeaEJGD18MbzMAoO0ECBxkkNzSMH%2FWlrto5sGFPeo%2Bq3JBE6fsXl6tkw%2BYtxfnkE5cBnRTLCYwhk29jzGGFlisfBjqMrzmxhdyB5prIOAUf1&X-Amz-Signature=d6f43f030c412a7af8910e03a80ec7efd21d1cb4588be6427c5e5932497fe22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6RLIO6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyUD3OE%2FJ1U6p%2FLcEmxtVD3nJ7F4VWMfVt8SlC5ofbjQIhALNo02bfZC3v2cc9HZ7q5MZBAWZrdqV5VSOpjKR35joSKv8DCHwQABoMNjM3NDIzMTgzODA1IgwaYSwKJxt8%2BA0U4M0q3APYISvGTn0OvnqsjVckirbSXGh3ahlHZqnx2cr%2BaTfHJDs53OKuh1m9zan5Bz8C98xJCaW3B3dRaB2e9fkJZ3C5LFHQnxq5Bg%2FRAROTTWJsEFqBw97nwEqkmoEM2u4%2Birv8Llm1Vl1ILeHmL4S8CyU3pLshOSKMWs1wEdlWkzFBDwmkcVqNoSktRjZ1UnjUd5%2Fp4%2Fzy0lxbH0c8VjiVwpOG%2BLJOUMvOVSuY%2B3%2B55D4g%2FnlIX0QjWjJCvSF1b%2Fa%2BM8t1gkZY2bhtu4MZ9ig0slStwRct2o3JTHm7jlNcDqbeu06oTrySRoLTyo71lS6OqWntYb56a%2BYNPUeYeUzts8Eos%2F7r6WgRIGat6HV6LvN%2FTO0I68qrl7xQo23ylBZs6%2B%2BhNIqDMVXIMWRD2tgJX56mNbkPdOWPZVoZIl4jA3qe2zwXKV%2BjWy66jnQvHxagmNSNoLv8Q4jdKVvMfgefSMplXqr5un5au9pcoxT0OOaeTd6M03bKsTK5%2BXbbkfDoYBr7H69h1ZX6onSAyOHevxips51ImUzX9NbfjeOf3ImuUVJO6k5kPsu5aaG7e8%2BNDvQq8HRvd1LSUQ4aG2p4HZMh7eVPphkNs%2Bn3ksYg9K7Mrnxp%2FsBiEXQpW0jNdjCnj4rKBjqkAbv%2B9s8DULCEs%2F%2FOe94xrrlW7JwKPs%2FRrlC6v%2Bpn7vIX2vVWxExeKFY45NjjPrrAZfV3RpJ3eGbEaTpxlu50UHbiWzkp%2Bl5khPNDdDgJAveH%2FrZlQeaEJGD18MbzMAoO0ECBxkkNzSMH%2FWlrto5sGFPeo%2Bq3JBE6fsXl6tkw%2BYtxfnkE5cBnRTLCYwhk29jzGGFlisfBjqMrzmxhdyB5prIOAUf1&X-Amz-Signature=d319053f62f210db10e9395ea711cd987e1f42528a3f2bf43e08f3ae593ffdad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

