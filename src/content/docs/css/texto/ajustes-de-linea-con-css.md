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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFJDEU5N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd6tyY2Y31c2mW%2B8P%2F4%2Bmw9C9QPfz5r%2BvSNosUvtn91AiB%2Fwme6rQKP9wAFmHgI4LCiIoLaoTfLPB5n01smCNbXQSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMCe8zvejjmlEIwvzZKtwDuIE9D%2Fg1CZz74vLpv%2B7tIwF7G6RxjKSZdFDbWmQsEWQT6%2BWleGhl1ZqngKC1133IPeNhLIy%2FzMLq8PfOk9Nmojgp6Svf4XHHNogAdkAyynVcY%2FTe6WVJ35zIB4amaWA8AYmE7ALTSTsgMDbHLsyuqMC8HKY4khU3wIB9VtKxRNZf9NmwsIS4h02u6LvrTX7mJAjJTSaSjJ4%2BK3%2BNunW8KTG8t3xIPLdSVKjoLMbhJ%2FxewaNqanreCCkUZW8%2FYEk3q8vzhOX6acm6QbwtIr5BXllpPixFO4QKNrIsp02PAX34dCAKGboQqIHzAQYORd6iciiFElwQiU6LSYgAK4YRMxxhDtS4HuLNSrKjV99%2Bl7BFjMi8ofYqV427KXOnz51BJIIqE4dgv7R1LEgUNGNmH52VQ8vYGm10t80bF%2F%2BCpXpoNgh6OZQajEZkFmh%2FX6aTVOqsMNTcZumoE9kO8S13AUI%2B9snvzl2aFUCMz3Sik6z4UXmC%2F%2FSMQMT4pLVtmFdpo5Bv5FTOjtOKCNgdVFHMt2u9T0tSr4goyTJwdJUqUALHe24jVUa%2B63i0Ei46QrH3Rn6DxbGtOPBkXWivqO3pkNR0bJbCYAakUqqOZ7RcKJyluyvWPy2G3YaSA8UwxfuHygY6pgGvkBzKbzE7j3du2y%2BNjAH5qZ30xbZCfnzfVdAJ02hJ36cYbKKPGY3zY0GD6%2F8ete%2ByBab5OY7e3oPGh2u4DhMdA3mmoB9pURVQbSwU55oLH1KX82m%2BTUuQfG2CGWqtHbEe5cLQ%2FMUk3ogR2VZualwuymTjPkgP6PmXPJzLJIEjiQ2vHh%2Bkqp3nXBrqTXhvDoxYx26f%2Fdm2b1TU%2FKuV7%2FKPrLVZu%2FxZ&X-Amz-Signature=b82f61eb0abcf5859a032b465699ec357676468aa2101e7d016f7cc3a9d3229b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFJDEU5N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd6tyY2Y31c2mW%2B8P%2F4%2Bmw9C9QPfz5r%2BvSNosUvtn91AiB%2Fwme6rQKP9wAFmHgI4LCiIoLaoTfLPB5n01smCNbXQSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMCe8zvejjmlEIwvzZKtwDuIE9D%2Fg1CZz74vLpv%2B7tIwF7G6RxjKSZdFDbWmQsEWQT6%2BWleGhl1ZqngKC1133IPeNhLIy%2FzMLq8PfOk9Nmojgp6Svf4XHHNogAdkAyynVcY%2FTe6WVJ35zIB4amaWA8AYmE7ALTSTsgMDbHLsyuqMC8HKY4khU3wIB9VtKxRNZf9NmwsIS4h02u6LvrTX7mJAjJTSaSjJ4%2BK3%2BNunW8KTG8t3xIPLdSVKjoLMbhJ%2FxewaNqanreCCkUZW8%2FYEk3q8vzhOX6acm6QbwtIr5BXllpPixFO4QKNrIsp02PAX34dCAKGboQqIHzAQYORd6iciiFElwQiU6LSYgAK4YRMxxhDtS4HuLNSrKjV99%2Bl7BFjMi8ofYqV427KXOnz51BJIIqE4dgv7R1LEgUNGNmH52VQ8vYGm10t80bF%2F%2BCpXpoNgh6OZQajEZkFmh%2FX6aTVOqsMNTcZumoE9kO8S13AUI%2B9snvzl2aFUCMz3Sik6z4UXmC%2F%2FSMQMT4pLVtmFdpo5Bv5FTOjtOKCNgdVFHMt2u9T0tSr4goyTJwdJUqUALHe24jVUa%2B63i0Ei46QrH3Rn6DxbGtOPBkXWivqO3pkNR0bJbCYAakUqqOZ7RcKJyluyvWPy2G3YaSA8UwxfuHygY6pgGvkBzKbzE7j3du2y%2BNjAH5qZ30xbZCfnzfVdAJ02hJ36cYbKKPGY3zY0GD6%2F8ete%2ByBab5OY7e3oPGh2u4DhMdA3mmoB9pURVQbSwU55oLH1KX82m%2BTUuQfG2CGWqtHbEe5cLQ%2FMUk3ogR2VZualwuymTjPkgP6PmXPJzLJIEjiQ2vHh%2Bkqp3nXBrqTXhvDoxYx26f%2Fdm2b1TU%2FKuV7%2FKPrLVZu%2FxZ&X-Amz-Signature=49ca89595465b5908fbef4bd29679d4c37244c0c40e1865ac6d9f30f6e071478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

