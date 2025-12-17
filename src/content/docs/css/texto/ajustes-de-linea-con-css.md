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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DCCXQCH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnTJG4ljeZhiMx8NalvW4Mq6fyxo0dBOOvbVZNnKcS%2FAiEAn7rQmfvWTmXxbUZxiTa0DxEjqL8VEslrX6CTXldFrnwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKSSgnjIpzeNqCHqPCrcA7mlqOiWXwMTNQkrGqsrq3sWmen%2FnTGeKAGOYZp9Nw5OxRTa0l3SJhsILzJSkTBYdHJiKrLYBmEEn1ovCLVYmEP7nfaE7Z5f2a6W9y%2FIUIZXaXuJjfWkSWW9mKF%2BteqkMscQByK7b78tlCrmBmxCt5%2BzpBTgihzXftaVby8JnLEp1FlwcSRUsnSCmgQ4mOY1c8zioILTJMtSJyuAvKDNjWp29AXs2GtzzI2MUmVC23%2BEXh3ET50%2Ff7C1Vw%2BOt1Ms6zRBdYn4VmHn%2BtWjAANHDQ7lrOvMxEMjCPLWiQGfLl30yqgDkmbvINvD9X7%2BAuBcnese9gL9kPNUZAmg8y%2BwG4D01m%2Bk%2FWqdnjXQYc9i5L9fGAOX2%2BtR4U248tpvhVL0AfsRcSoFte0laFcXzjRCQT9u%2F%2B%2Bih7P22XMCLmlK6oqmvJpHJ3E%2FW3cYoGVYiaekS4pgnd60MhTk2lKKfPJIy3dWWPTwpTMuFRbu6d4lKskfcWT1EfudPMduXgcdkqwulLX4nk3q%2Ftddzfh%2BtB0pVY9Qfj5kIoWwXgWkOHBIBjI5wZIYNN0Uo0a0x5K0%2F7jOLi2ct24EUMlp9Be1IuFFmDOVd43YhHLp5lPh7ZWzYfX%2Bv%2FLm1M2kfpXZ3FEIMNbvicoGOqUBwqeIpzOJdWnb1mB56raGzKt9qRshlEd2wwcteuELbXXYd1qSnCMyF%2BJJlNQltqsFLMC%2FeNip78hSVDD3QMiTsMOoBZOsgS7z%2BAgXduQXUCRYGABMg57I6oQuA2v0ERQ8ajmc4UmaxUTgXmo4DKnXWiYtQRo7hci742eC%2BFpu76afY9lmygtIvnGRnsPs8Kn%2Bh68Dha9gdgz%2FhTrPOTVRAEf%2BW1G%2F&X-Amz-Signature=226c9ebfd50229d49a6544986f25767255df7e441184c7ae2781a6b0ca90e848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DCCXQCH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnTJG4ljeZhiMx8NalvW4Mq6fyxo0dBOOvbVZNnKcS%2FAiEAn7rQmfvWTmXxbUZxiTa0DxEjqL8VEslrX6CTXldFrnwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKSSgnjIpzeNqCHqPCrcA7mlqOiWXwMTNQkrGqsrq3sWmen%2FnTGeKAGOYZp9Nw5OxRTa0l3SJhsILzJSkTBYdHJiKrLYBmEEn1ovCLVYmEP7nfaE7Z5f2a6W9y%2FIUIZXaXuJjfWkSWW9mKF%2BteqkMscQByK7b78tlCrmBmxCt5%2BzpBTgihzXftaVby8JnLEp1FlwcSRUsnSCmgQ4mOY1c8zioILTJMtSJyuAvKDNjWp29AXs2GtzzI2MUmVC23%2BEXh3ET50%2Ff7C1Vw%2BOt1Ms6zRBdYn4VmHn%2BtWjAANHDQ7lrOvMxEMjCPLWiQGfLl30yqgDkmbvINvD9X7%2BAuBcnese9gL9kPNUZAmg8y%2BwG4D01m%2Bk%2FWqdnjXQYc9i5L9fGAOX2%2BtR4U248tpvhVL0AfsRcSoFte0laFcXzjRCQT9u%2F%2B%2Bih7P22XMCLmlK6oqmvJpHJ3E%2FW3cYoGVYiaekS4pgnd60MhTk2lKKfPJIy3dWWPTwpTMuFRbu6d4lKskfcWT1EfudPMduXgcdkqwulLX4nk3q%2Ftddzfh%2BtB0pVY9Qfj5kIoWwXgWkOHBIBjI5wZIYNN0Uo0a0x5K0%2F7jOLi2ct24EUMlp9Be1IuFFmDOVd43YhHLp5lPh7ZWzYfX%2Bv%2FLm1M2kfpXZ3FEIMNbvicoGOqUBwqeIpzOJdWnb1mB56raGzKt9qRshlEd2wwcteuELbXXYd1qSnCMyF%2BJJlNQltqsFLMC%2FeNip78hSVDD3QMiTsMOoBZOsgS7z%2BAgXduQXUCRYGABMg57I6oQuA2v0ERQ8ajmc4UmaxUTgXmo4DKnXWiYtQRo7hci742eC%2BFpu76afY9lmygtIvnGRnsPs8Kn%2Bh68Dha9gdgz%2FhTrPOTVRAEf%2BW1G%2F&X-Amz-Signature=497c9a5976af436c700cefaf56eee1f0806465731b77a400bcd076a2922bb8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

