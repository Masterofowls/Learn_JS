 Browser architecture

Поиск сайта - вывод данных - выбор ссылки -> отправка запроса на DNS - получаем обратно ip адрес (192.168.10.24) - отправляется на фронтенд сервер - обратно получаем файлы (html, css, js)

js файлы обрабатываются в последнюю очередь 

html - DOM , css - CSSOM  -> Render Tree - Layout(размещение) - Painting(заполнение контентом)

js - преобразование DOM - Reflow - Repaint


User Interfsce

        | 					|

Browser Engine                           --- Data persistence

   |						|

Rendering engine

|          |					|

Networking Javascript engine UI backend


localStorage, sessionStorage, cookies - внутреннее хранилище данных

localStorage, sessionStorage - хранилище пары ключ-значение

localStorage работает в рамках браузера до перезагрузки пк, sessionStorage - в рамках вкладки

cookies - специальное хранилище обмена данными между фронт и бек в фоновом режиме, есть параметры (срок хранения, разрешения, )
