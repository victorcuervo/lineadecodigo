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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WMNURL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEexAljPoOGBPvdh5V5fHscAX2c3GROr2GHB2PtjQuPUAiEA5vmtV5nPSzOT%2FKV07OgRPjrd04KwlT11%2BnH%2F%2BtKATTYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfH%2Fsm2K8NO9omOfyrcA9su6kGMeHUzz2VZ6xOkDTspT5gameIPFSULLSt9H5xcNDl0%2F2py76OXvm7YxWAWAYR%2ByXL1TQ%2Fih9RdL2KaaNjbIa83hUB4f5wHplQBm5sUiTQisGQAT9SGV3wjRvH3zesg2imDmXcSejMw3x0P8Oef%2FumW4m57vk4OTccSBt0IOGUm6doUJVLSKqntiVfY%2FU5iAYK98gz9la1IldHHDz%2BMIBdXyB%2Flv9rTOsqi8IFnE5%2Bp4GFr7FBw%2BpB5fAoE0QVsGVv7%2BlDOi7ZTmSjdG0zi0cU26HLcxYIFQD3eYNeHJ77ttGbUf0KqHFW7%2FIqveScO2LVYA7yaJmppk%2BA8rofRCqOM2LaOLsAMAe3HXOKjXvCPxCWv9mkgckRB6duJK3VDSuLwCgUCcbHFzwmsNj22A2BbHC%2Ber5%2BUrtJtTQZfRhUkCrVM5nmI3Kv1drgiZY7FEq4l96Xpn2sXCN4lJ75SQz4juuQnfY%2BbUjPCgk530PfW6lZnLil5mXPUdGRCmIXWPBixZu33%2BEoNhmjV%2FxkppnwPGa4VY3GH8n5aRORCw2da3xdqpuys1SrtfSoeQo2in4pGwY1EisVKTbDwzWPqePbA%2FoayzhjY%2BZ%2BAsN5v16Q68ngbIFGogiL2MNGAi8oGOqUB%2BFd2cqwL1JdbaaOGj4mF2iRsuD8BtamuX4ItKm6tUYDE26TGIZg9FDuo2g%2BH5oPQ7so5CanTURI3X3ZjlVPWuu87cZ3HSqk9ZA9HGRiHd0SWCggVKp5teB%2BfIJkQNbIQbfsqN3til1aNrTqv0hF8cLLPSOD%2FCS557y5nMUa6044mC5TttUbeeco35ZsonXQ1zz04q7Ph%2FaTBDV0bJJyKEHFGDiHW&X-Amz-Signature=ccb7e666e187cd089005aa27cba1f894e49ec6417779d6ee69a51b8b8b5ba782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WMNURL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEexAljPoOGBPvdh5V5fHscAX2c3GROr2GHB2PtjQuPUAiEA5vmtV5nPSzOT%2FKV07OgRPjrd04KwlT11%2BnH%2F%2BtKATTYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfH%2Fsm2K8NO9omOfyrcA9su6kGMeHUzz2VZ6xOkDTspT5gameIPFSULLSt9H5xcNDl0%2F2py76OXvm7YxWAWAYR%2ByXL1TQ%2Fih9RdL2KaaNjbIa83hUB4f5wHplQBm5sUiTQisGQAT9SGV3wjRvH3zesg2imDmXcSejMw3x0P8Oef%2FumW4m57vk4OTccSBt0IOGUm6doUJVLSKqntiVfY%2FU5iAYK98gz9la1IldHHDz%2BMIBdXyB%2Flv9rTOsqi8IFnE5%2Bp4GFr7FBw%2BpB5fAoE0QVsGVv7%2BlDOi7ZTmSjdG0zi0cU26HLcxYIFQD3eYNeHJ77ttGbUf0KqHFW7%2FIqveScO2LVYA7yaJmppk%2BA8rofRCqOM2LaOLsAMAe3HXOKjXvCPxCWv9mkgckRB6duJK3VDSuLwCgUCcbHFzwmsNj22A2BbHC%2Ber5%2BUrtJtTQZfRhUkCrVM5nmI3Kv1drgiZY7FEq4l96Xpn2sXCN4lJ75SQz4juuQnfY%2BbUjPCgk530PfW6lZnLil5mXPUdGRCmIXWPBixZu33%2BEoNhmjV%2FxkppnwPGa4VY3GH8n5aRORCw2da3xdqpuys1SrtfSoeQo2in4pGwY1EisVKTbDwzWPqePbA%2FoayzhjY%2BZ%2BAsN5v16Q68ngbIFGogiL2MNGAi8oGOqUB%2BFd2cqwL1JdbaaOGj4mF2iRsuD8BtamuX4ItKm6tUYDE26TGIZg9FDuo2g%2BH5oPQ7so5CanTURI3X3ZjlVPWuu87cZ3HSqk9ZA9HGRiHd0SWCggVKp5teB%2BfIJkQNbIQbfsqN3til1aNrTqv0hF8cLLPSOD%2FCS557y5nMUa6044mC5TttUbeeco35ZsonXQ1zz04q7Ph%2FaTBDV0bJJyKEHFGDiHW&X-Amz-Signature=a02c94cb9f74b152b6701efadc70f2f8c29b0a15a0fd4280ad5304f603df97a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

